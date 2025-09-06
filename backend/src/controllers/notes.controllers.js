import { connectMongoDb } from "../config/db.js";
import NoteModel from "../models/note.model.js";


export const getAllNotes= async (req, res) => {
    try {
        const allNotes = await NoteModel.find();
        if(allNotes){
            res.status(200).json(allNotes);
        }
    } catch (error) {
        console.log("Error in the getAllNotes Controller",error);
        res.status(500).json({errorMessage:"Internal Server error"});
    }
    res.status(200).send('Notes API Endpoint:  you have 5 notes');
};

export const addNote =(req, res) => {
    res.status(201).send(`Note: ${req.body.noteText} added successfully`);
};

export const updateNote =(req, res) => {
    res.status(200).json({ message: `Note with ID ${req.params.id} updated successfully` });
}

export const deleteNote =(req,res)=>{
    res.status(200).json({message:`Note with ID ${req.params.id} is successfully deleted`});
}