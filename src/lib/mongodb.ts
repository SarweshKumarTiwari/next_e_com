import mongoose from "mongoose";

const uri=process.env.MONGO_URI;
const db=process.env.MONGODB
export default async()=>{
  if (!uri||!db) {
    return;
  }
    try {
        const connectionStatus=await mongoose.connect(uri,{dbName:db});
        console.log("Database is connected at ",connectionStatus.connection.host);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
