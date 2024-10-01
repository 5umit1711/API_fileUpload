import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: [20, 'File name to large'],
    },
    file: {
        type: String,
        required : true,
    }
})

const File = mongoose.model("File", fileSchema);

export default File;