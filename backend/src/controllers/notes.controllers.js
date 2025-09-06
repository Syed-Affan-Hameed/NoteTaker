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

export const updateNote = (req, res) => {
  res
    .status(200)
    .json({ message: `Note with ID ${req.params.id} updated successfully` });
};

export const deleteNote = (req, res) => {
  res
    .status(200)
    .json({ message: `Note with ID ${req.params.id} is successfully deleted` });
};
