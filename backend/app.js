const express = require('express');
const connectToDatabase = require('./utils/DB')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');


// Load environment variables
dotenv.config();

// Create Express app
const app = express();
app.get('/', async (req, res) => {
  try {
    await connectToDatabase(); // Ensure the database is connected
    res.json({ message: 'DB connection successful' });
  } catch (error) {
    res.status(500).json({ message: 'DB connection failed' });
  }
});
// Middleware to parse JSON
app.use(express.json());
app.use("/",(req,res)=>{
    res.json({message:"working"})
})
// Routes
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
// MongoDB connection
mongoose
    .connect(process.env.MONGOO_URI)
    .then(() => console.log('DB connection successful'));

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
