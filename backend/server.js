import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import notesRouter from './routes/notes.routes.js';

const app=express();
dotenv.config();

const PORT = process.env.PORT || 5005;
app.use(express.json());
app.use('/api/notes',notesRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.get('/', (req, res) => {
//   res.status(200).send('Hello, World!');
// });

// app.get('/api/notes',(req,res)=>{
//     res.status(200).send('Notes API Endpoint:  you have 5 notes');
// })

// app.post('/api/addnote',(req,res)=>{
//     res.status(201).send('Note added successfully');
// }   );

// app.put('/api/updatenote/:id',(req,res)=>{
//     res.status(200).json({ message: `Note with ID ${req.params.id} updated successfully` });
// })
// app.delete('/api/deletenote/:id',(req,res)=>{
//     res.status(200).json({ message: `Note with ID ${req.params.id} deleted successfully` });
// });