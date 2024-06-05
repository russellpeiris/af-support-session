import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: true,
        trim: true,
        maxlength: [100, "Title can not be more than 100 characters"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        maxlength: [500, "Description can not be more than 500 characters"]
    },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;