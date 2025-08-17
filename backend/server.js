import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app=express();
dotenv.config();

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});