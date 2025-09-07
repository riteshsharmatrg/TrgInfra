import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Contact = mongoose.model("ContactUs", contactSchema);
export default Contact;
