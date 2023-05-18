import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: "string", 
        required: [true, "Username es obligatorio"]
    },
    password:{
        type: "string",
        required: [true, "password es obligatoria"]
    }
});

export default mongoose.model("User", userSchema);