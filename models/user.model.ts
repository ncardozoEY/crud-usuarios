import mongoose from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: "string", 
        required: [true, "Username es obligatorio"]
    },
    password:{
        type: "string",
        required: [true, "password es obligatoria"]
    }
});

export default mongoose.model<IUser>("User", userSchema);