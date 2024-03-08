import mongoose from 'mongoose'


export default async function dbConnect() {
  try {
    await mongoose.connect(process.env.DEV as string);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}


