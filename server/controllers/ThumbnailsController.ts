
import { Request,Response } from "express"
import Thumbnnail from "../models/Thumbnail.js";
export const generateThumbnail = async (req: Request, res: Response) =>{
    try{
        const {userId} = req.session;
        const{title,prompt: user_prompt,style,aspect_ratio,color_scheme,text_overlay}=req.body;
        const thumnail = await Thumbnnail.create({
            userId,
            title,
            prompt_use: user_prompt,
            style,
            aspect_ratio,
            color_scheme,
            text_overlay,
            isGenerating: true
        })
    }catch(error){

    }
}