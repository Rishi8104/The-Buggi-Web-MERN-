import {StatusCodes} from "http-status-codes";
import { ResturentModel } from "../DBmoduls/ResturentModel.js";

export  async function SaveRestruent(request,response) {
    try {

        //resquest.body bhi likh skte h ya hardcoded likho 
        const Res = new ResturentModel(request.body);
        const R = await Res.save();
        response.status(StatusCodes.CREATED).json(R);
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}


export  async function FatchResturent(request,response) {
    try {
        const Resturnet = await ResturentModel.find();
        response.status(StatusCodes.OK).json(Resturnet);
        
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
    
}

export  async function DelateResturent(request,response) {

    try {
          const resturent = await ResturentModel.findByIdAndUpdate(request.params.id,request.body);
          response.status(StatusCodes.OK).json();
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
    
}