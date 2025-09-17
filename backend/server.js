
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Auth routes
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Start server
app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});