import express, { json } from 'express'; 
import cors from 'cors'; 
import mongoose from 'mongoose'; 
import {} from 'dotenv/config';
import todoRoutes from './routes/todo.js';

//Execute express 
const app = express(); 

const PORT = 5000; 

//Middlewares
app.use(json()); 
app.use(cors()); 
app.use('/api', todoRoutes);


const connectionString = process.env.MONGODB_URL; 

mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after MongoDB connection is established
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('Connection error:', err));