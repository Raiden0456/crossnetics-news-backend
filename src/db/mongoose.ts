import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

const connectDB = async (): Promise<void> => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI as string)
    console.log('MongoDB connected to database:', connection.connections[0].name)
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  }
}

export default connectDB
