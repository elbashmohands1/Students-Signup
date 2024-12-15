import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}
async function connectToDatabase(){
    try {
        await mongoose.connect(process.env.MONGODB_URI, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
        return 
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
        throw (error)
    }
};

export default connectToDatabase;
