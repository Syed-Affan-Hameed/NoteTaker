import express from 'express';
import { addNote, deleteNote, getAllNotes, updateNote } from '../controllers/notes.controllers.js';

const router = express.Router();

router.get('/', getAllNotes);

router.post('/addnote', addNote);

router.put('/updatenote/:id',updateNote);

router.delete('/deletenote/:id',deleteNote);

export default router;