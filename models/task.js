import mongoose, {Schema} from "mongoose";

export const TaskSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);

export default Task;