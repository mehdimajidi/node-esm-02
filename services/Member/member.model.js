import mongoose from "mongoose";

const { Schema } = mongoose;

const memberSchema = new Schema({
  firstname: String,
  lastname: String,
  birthdate: String,
});

export const MemberModel = mongoose.model("members", memberSchema);
