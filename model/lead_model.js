import mongoose from "mongoose";

const leadSchema = mongoose.Schema({
    name: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    carDetail: {type: String, required: true},
    

})