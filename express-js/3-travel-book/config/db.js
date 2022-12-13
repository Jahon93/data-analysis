const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewURLParser: true
    })
    console.log(`MongoDB connected to ${conn.conection.host}`);
  } catch (error) {
    console.log(error);    
  }
}

module.exports = connectDB