import mongoose from "mongoose";


const dataBaseConnection = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) {
      throw new Error('MONGO_URI is not defined in the environment variables');
    }
    await mongoose.connect(MONGO_URI)
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Some error occurred while connecting to the database:', error);
  }
};

export default dataBaseConnection;