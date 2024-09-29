export default function AddTask() {
    return <form className="flex flex-col gap-3">
        <input
            className="border border-slate-600 px-8 p-2"
            type="text" placeholder="Task Title"
        />

        <input
            className="border border-slate-600 px-8 p-2"
            type="text" placeholder="Task Description"
        />

        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
            Add Task
        </button>

    </form>
}