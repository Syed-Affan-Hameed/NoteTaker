import { connectMongoDb } from "../config/db.js";
import NoteModel from "../models/note.model.js";

export const getAllNotes = async (req, res) => {
  try {
    const allNotes = await NoteModel.find();
    if (allNotes) {
      res.status(200).json(allNotes);
    }
  } catch (error) {
    console.log("Error in the getAllNotes Controller", error);
    res.status(500).json({ errorMessage: "Internal Server error" });
  }
};

export const addNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title) {
      throw new error("Title cannot be empty");
    }
    const newNote = new NoteModel({ title, content });

    const savedNote= await newNote.save();
    res.status(201).json({ message: "Note Created successfully",Note:savedNote });
  } catch (error) {
    console.log("Trouble creating note in the addNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }

  // res.status(201).send(`Note: ${req.body.noteText} added successfully`);
};

export const updateNote =async (req, res) => {

    //We need to specify which note we are going to update by its id in the database
    // we will get the required id from the query params
    try {
         const newTitle = req.body.title;
    const newContent =req.body.content;
    const idOftheNoteToBeUpdated = req.params.id;
    const noteTobeUpdated = await NoteModel.findByIdAndUpdate(idOftheNoteToBeUpdated,{title:newTitle,content:newContent},{new:true});

    if(noteTobeUpdated){
        res.status(200).json({message:"Note Updated successfully", Note:noteTobeUpdated});
    }
    else{
        res.status(404).json({message:"404: Not Found"})
    }   

    } catch (error) {
        console.log("Error updating the note",error);
         res.status(500).json({message:"500: Internal server error"});
    }
};

export const deleteNote = async(req, res) => {
    try {
        const noteToBeDeletedId= req.params.id;
        const deletedNote = await NoteModel.findByIdAndDelete(noteToBeDeletedId);

        if(!deletedNote){
        res.status(404).json({message:"404 Not Found"});
        }
        res.status(200).json({message:"Note Deleted Successfully",Note:deletedNote});


    } catch (error) {
          console.log("Error updating the note",error);
         res.status(500).json({message:"500: Internal server error"});

    }

};
