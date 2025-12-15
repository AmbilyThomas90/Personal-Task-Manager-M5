import mongoose from "mongoose";

// Create a schema for the User collection
const userSchema = new mongoose.Schema({
name: String,
email: { type: String, unique: true },
password: String
});


export default mongoose.model("User", userSchema);