import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://elbashmohands1:0118549511Mm@cluster0.2zqyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}
async function connectToDatabase(){
    try {
        await mongoose.connect(MONGODB_URI, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
        return 
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
        throw (error)
    }
};

export default connectToDatabase;
