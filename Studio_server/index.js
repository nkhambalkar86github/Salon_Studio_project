import express from 'express';
import mongoose from 'mongoose';
import { Costomer } from './CostomerModel.js';
import cors from 'cors'
import { Admin } from './AdminModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


function verifyToken(req,res,next)
{
    const header=req.get('Authorization');
    if(header)
    {
        const token=header.split(" ")[1];
        jwt.verify(token,"Key123",(error,payload)=>
        {
            if(error)
            {
                res.send({msg:"Invalid token"});
            }
            else
            {
                next();
            }
        });
        
    }
    else{
        res.send({msg:"Please Login first"});
    }
}

const app=express();
app.use(cors());
app.use(express.json());

// to save data
app.post('/costomer',async (req,res)=>
{
    try
    {
      const reqdata=req.body;
      const costomer=new Costomer(reqdata);
      await costomer.save();
      res.send({msg:"costomer inserted successfully..!"})
    } catch (error)
    {
        res.send({msg:"something went wrong...!"});
        console.log(error);
    }
})


// to get data

app.get('/costomer',async (req,res)=>
{
    try
    {
       const costomer=await Costomer.find();
       res.send({costomer:costomer});

    } catch (error)
    {
        res.send({msg:"something went wrong...!"});
    }
})


// fetching data for single student

app.get('/costomer/:number',async(req,res)=>
{
    try
    {
        const costomer=await Costomer.findOne({number:req.params.number});
        if(costomer==null)
        {
            res.status(404).send({msg:"Costomer Not found..!"})
        }
        else
        {
            res.send({costomer:costomer});
        }

    } catch (error)
    {
        res.status(500).send({msg:"Something went wrong...!"});
    }
})

// to delete data

app.delete('/costomerdel/:number',async(req,res)=>
{
    try 
    {
       await Costomer.deleteOne({number:req.params.number});    
       res.send({msg:"record deleted successfully"});
    } catch (error) 
    {
        res.status(500).send({msg:"Something went wrong...!"});
    }
})

app.put('/costomer/:number',async(req,res)=>
{
    try 
    { 
         await Costomer.updateOne({number:req.params.number},req.body);
         res.send({msg:"Costomer updated..!"})
        
    } catch (error)
    {
        res.status(500).send({msg:"Something went wrong...!"});
    }
})


app.post('/admin',async(req,res)=>
{
    try 
    { 
      const reqdata=req.body;
      reqdata['password']= bcrypt.hashSync(reqdata.password,10);
     const admin=new Admin(reqdata);
    
      await admin.save();
      res.send({msg:"admin inserted successfully..!"})
        
        
    } catch (error)
    {
        res.status(500).send({msg:"Something went wrong...!"});
    }
})


app.post("/admin/login",async(req,res)=>
{
    try 
    {
        const admin =await Admin.findOne({name:req.body.name})
    if(admin)
    {
         if(bcrypt.compareSync(req.body.password,admin.password))
         {
            const token=jwt.sign({adminName:admin.name},"Key123")
           
              res.send({msg:"Ok" ,token:token });
         }
         else
         {
             res.send("Invalid Password..!");
         }
    }
    else
    {
        res.send("Invalid Username..!");

    }    
    } catch (error) {
        console.log(error);
    }
})




const Connectdb=async()=>
{
try 
{
   await mongoose.connect('mongodb://127.0.0.1:27017/salondb');
   console.log("database connection satrted"); 
} catch (error)
{
    console.log(error)
}
}

app.listen(2310,()=>
{
    console.log("server started");
    Connectdb();
})