
const dotenv = require('dotenv');
dotenv.config();
// Function to connect to the database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    
    });
    console.log('DB connection successful');
  } catch (error) {
    console.error('DB connection failed:', error);
    throw new Error('Failed to connect to database');
  }
};

// Export the connection function
module.exports = connectToDatabase;
