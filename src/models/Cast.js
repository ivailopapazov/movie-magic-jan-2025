import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: String,
    age: Number,
    born: String,
    imageUrl: String,
});

const Cast = model('Cast', castSchema);

export default Cast;
