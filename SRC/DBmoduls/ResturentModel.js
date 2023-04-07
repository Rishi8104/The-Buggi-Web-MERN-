import mongoose from "mongoose";


 const ResturentSchema = new mongoose.Schema({
    id:{type: String, required: true, unique:true},
    restaurantname:{type:String,required: true},
    address:{type: String, required: true},
    contact:{type: String, required:true}
 });
 export const ResturentModel = new mongoose.model('Resturent',ResturentSchema); 


 


