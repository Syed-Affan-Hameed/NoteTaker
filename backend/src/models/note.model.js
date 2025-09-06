import mongoose from "mongoose";
// Create a mongoose schema
// Export a model based on that schema

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true
    }
}, {timestamps:true});

const NoteModel = mongoose.model("Note",noteSchema);

export default NoteModel;

