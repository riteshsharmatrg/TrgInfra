import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String,  },
        phone: { type: String, required: true },
        company: { type: String },

        projectType: {
            type: String,
            required: true,
            enum: [
                "residential",
                "commercial",
                "industrial",
                "institutional",
                "mixed",
                "other",
            ],
        },

        timeline: {
            type: String,
            required: true,
            enum: ["immediate", "urgent", "planned", "future"],
        },

        location: { type: String },
        description: { type: String },
    },
    {
        timestamps: true,
        versionKey: false

    }
);

const Request = mongoose.model("Request", requestSchema);
export default Request;
