const mongoose = require("mongoose");

const uri =
  "mongodb+srv://elbashmohands1:0118549511Mm@cluster0.2zqyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
  try {
    await mongoose.connect(uri);
    console.log("db connection established");
  } catch (error) {
    throw new Error("Faild to connect");
  }
}
export default main;