import Course from "../schemas/Course.js";

export const createCourse = async (req, res) => {
    try {
        const { title, description } = req.body;
        // await db.collection("courses").insertOne({ title, description }); this is not fully implemented, please research on this.

        const course = await Course.create({ title, description });

        res.status(201).json(course);
    } catch (error) {
        console.error("Error creating course", error);
        res.status(500).json({ message: "Error creating course" });
    }
}