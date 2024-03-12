import mongoose, { Schema } from "mongoose";
const AdminSchema=new Schema(
    {
        name:String,
        password:String,
        email:String
    
    }
);
export const Admin=mongoose.model("admin",AdminSchema);