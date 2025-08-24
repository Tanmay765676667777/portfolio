import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tech: [String],
  link: { type: String },
  image: { type: String },
});

export default mongoose.model("Project", ProjectSchema);