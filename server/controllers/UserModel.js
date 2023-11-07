const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required },
        isAdmin: { type: Boolean, default: false, required: true }, // check quyền 
        phone: { type: Number, required: true },
        access_token: { type: String, require: true },  // mã truy cập 
        refresh_token: { type: String, require: true }, // mã làm mới
    },
    {
        timestamps: true // thời gian create và update 
    }
);
const User = mongoose.model("User", userSchema);
module.exports = User;