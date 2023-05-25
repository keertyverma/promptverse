import { Schema, models, model } from "mongoose";

const promptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
  },
});

const Prompt = models.Prompt || new model("Prompt", promptSchema);

export default Prompt;
