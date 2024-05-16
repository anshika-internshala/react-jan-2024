import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema( {
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
