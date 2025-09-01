import { connectMongoDb } from "../config/db.js";


export const getAllNotes=(req, res) => {
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