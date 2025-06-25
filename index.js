import express from 'express';
import dotenv from 'dotenv';
import pool from './db.js';
import userRoutes from './routes/user.js';

dotenv.config();
const app = express();
app.use(express.json());
pool.connect((err) => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected to the PostgreSQL database');
    }
});

app.use(express.json());
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
