import { Request,Response } from "express";
import Thumbnnail from "../models/Thumbnail.js";

export const getUsersThumbnails = async (req: Request, res: Response)=>{
    try{
        const{userId} =req.session;

        const thumbnail = await Thumbnnail.find({userId}).sort({createdAt: -1})
        res.json({thumbnail})

    }catch(error: any){
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

//controller to get single thumbnail of a User

export const getThumbnailbyId = async (req: Request, res: Response)=>{
    try{
        const{userId} =req.session;
        const {id} = req.params;

        const thumbnail = await Thumbnnail.findOne({userId, _id: id});
        res.json({thumbnail});
    }
    catch(error: any){
        console.log(error);
        res.status(500).json({message: error.message})
    }
}
