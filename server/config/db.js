import mongoose from "mongoose";


const connectDB = async () => {
try {
      // Attempt to connect using the connection string stored in environment variables
await mongoose.connect(process.env.MONGO_URI);
// Log success message if connected
console.log("MongoDB Connected");
} catch (err) {
console.error(err);// Log any error that occurs during connection

    // Exit the process with failure code
process.exit(1);
}
};


export default connectDB;