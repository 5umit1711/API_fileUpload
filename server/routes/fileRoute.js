import express from 'express';
import File from '../models/fileSchema.js';
import uploads from '../middlewares/multer.js';
import path from 'path'
import { fileURLToPath } from 'url';
import cloudinary from '../middlewares/cloudinary.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const router = express.Router();

router.get("/getAllFiles", async(req,res)=>{
    try{
        const data = await File.find({});
        return res.send({
            success: true,
            file: data,
        })
    }catch(error){
        res.send({
            success: false,
            message: error.message,
        })
    }
})

router.post("/sendFile", uploads.single("file"), async(req,res)=>{
    try{
        const {name} = req.body;
        const file = await cloudinary.uploader.upload(req.file.path, {
            folder: 'file_upload_project'
        })
        const fileUrl = file.secure_url;
        const item = await File.create({name, file: fileUrl});
        res.send({
            success: true,
            message: "File uploaded successfully",
        })
    }catch(error){
        res.send({
            success: false,
            message: error.message
        })
    }
})

router.get("/download/:id", async(req,res)=>{
    try{
        const {id} = req.params;
        const file = await File.findById(id);
        if(!file){
            return res.send({
                success: false,
                message: "No such file exists",
            })
        }
        const filePath = file.file;
        res.redirect(filePath);
        // res.send(filePath);
    }catch(error){
        res.send({
            success: false,
            message: error.message
        })
    }

})

export default router;