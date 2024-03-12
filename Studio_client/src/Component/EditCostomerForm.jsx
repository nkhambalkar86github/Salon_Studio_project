
import React, { useEffect, useState } from "react";

import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchCostomerByNumber, updatedCostomer } from "../Sercices/CostomerService";



export function EditCostomerForm()
{
    //data edit ke liye API fetch krna pdega for 1 student
    //jab bhi han edit button pe click krenge tab hm user ko new component pe redirect krenge with number jiske basis pe hm edit kr payenge
    //ex... costomer/number


   

   const[formData,setFormData]=useState({name:"",age:"",gender:"",number:"",email:""});

   const[isSubmited,setIsSubmited]=useState(false);

   //const[costomer,setCostomer]=useState({})

   const param=useParams(); //url se value read krke dega


   const handleChange=(e)=>
   {
       setFormData({...formData,[e.target.name]:e.target.value});      //formdata contain all the data here
   }
   

   const handleSubmit=async(e)=>
   {
    e.preventDefault();         //it will stop the page to reload.
     try
      {
       const result=await updatedCostomer(formData,param.number);
       setFormData({name:"",age:"",gender:"",number:"",email:""});    // update krne ke bad sbhi fields ko empty kr denga
       console.log(result);
       setIsSubmited(true)    //for alert msg
       setTimeout(()=>
       {
         setIsSubmited(false)
       },1800) 
     } catch (error)
      {
           console.log(error);
     }
   }

   const populateCostomerEditState=async()=>
   {
      try
       {
        const result= await fetchCostomerByNumber(param.number);
        console.log(result.data.costomer);
    
        setFormData(result.data.costomer);
      } catch (error)
       {
        console.log(error);
      }
   }
   
   useEffect(()=>
   {
    
   populateCostomerEditState();
   },[]);



   return (
    <>
    {/* <Navbarpage></Navbarpage> */}
    
     <Container id="con"> 
    <h1>
        bdhddcj
    </h1>
       <Form onSubmit={handleSubmit} >
         <Form.Group controlId="formUsername">
           <Form.Label></Form.Label>
           <Form.Control
             type="text"
            value={formData.name}
            
             placeholder="Enter your name"
             name="name"
             onChange={handleChange}
            // value={formData.username}
            // onChange={handleChange}
             required
           />
         </Form.Group>
 
         <Form.Group controlId="formEmail">
           <Form.Label></Form.Label>
           <Form.Control
             type="text"
          value={formData.age}
             placeholder="Enter your age"
             name="age"
             onChange={handleChange}
             //value={formData.email}
           //s  onChange={handleChange}
             required
           />
         </Form.Group>
 
         <Form.Group controlId="formPassword">
           <Form.Label>male</Form.Label>
           <Form.Check
             type="radio"
             value={isSubmited?formData.roll:null}
             placeholder="Enter your gender"
             name="gender"
             value="male"
             checked={formData.gender==="male"?true:false}
             onChange={handleChange}
            // value={formData.password}
             //onChange={handleChange}
             required
           />
           <Form.Label>female</Form.Label>
            <Form.Check
          
             type="radio"
             value={isSubmited?formData.roll:null}
             placeholder="Enter your gender"
             name="gender"
             value="female"
             checked={formData.gender==="female"?true:false}
             onChange={handleChange}
            // value={formData.password}
             //onChange={handleChange}
             required
           />
         </Form.Group>

         <Form.Group controlId="formEmail">
           <Form.Label></Form.Label>
           <Form.Control
             type="text"
            value={formData.number}
             placeholder="Enter your phone"
             name="number"
             onChange={handleChange}
             //value={formData.email}
           //s  onChange={handleChange}
             required
           />
         </Form.Group>
         <Form.Group controlId="formEmail">
           <Form.Label></Form.Label>
           <Form.Control
             type="email"
           value={formData.email}
             placeholder="Enter your email"
             name="email"
             onChange={handleChange}
             //value={formData.email}
           //s  onChange={handleChange}
             required
           />
         </Form.Group>
 
         <Button variant="primary" type="submit">
           Update
         </Button>
       </Form>
       <Row className={"mt-3"}>
        <Col lg={4}>
         {isSubmited?<Alert variant="success">Costomer Registered Successfully</Alert>:null}

        </Col>
         
       </Row>
     </Container>

     </>
   );
 };
 