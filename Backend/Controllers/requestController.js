import Request from "../Models/Request.js";

export const createRequest = async (req, res) => {
    try {
        const request = new Request(req.body);
        const savedRequest = await request.save();
        res.status(201).json(savedRequest);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllRequests = async (req, res) => {
    try {
        const requests = await Request.find().sort({ createdAt: -1 });
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
