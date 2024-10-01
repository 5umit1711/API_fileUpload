import multer from "multer";

const storage = multer.diskStorage({
    filename: (req,file,cb)=>{
        cb(null, new Date().toISOString().replace(/[:.]/g, '-') + file.originalname);
    }
})

const uploads = multer({
    storage: storage,
    limits: {
        fileSize: 1024*1024*5,
    }
})

export default uploads;