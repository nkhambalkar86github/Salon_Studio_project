import mongoose, { Schema } from "mongoose";
const CostomerSchema=new Schema(
    {
        name:String,
        age:Number,
        gender:String,
        number:Number,
        email:String
    
    }
);
export const Costomer=mongoose.model("costomer",CostomerSchema);