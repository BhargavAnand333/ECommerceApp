import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cartData: {type: Object, default: {}}
},{minimize: false})

/*Use of minimize: false-
MongoDB ignores the sections initialized with empty areas. So cartData will not be available when a user is created. To offset that, we put minimize: false */

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel