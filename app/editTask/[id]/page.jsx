import EditTaskForm from '@/components/EditTaskForm';

const getTaskbyId = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/task/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error('Failed to fetch task');
        }

        return res.json();
    } catch {
        console.log(error);
    }
};

export default async function EditTask({ params }) {
    const { id } = params;
    const {task} = await getTaskbyId(id);
    const {title, description} = task;

    return <EditTaskForm id={id} title={title} description={description} />;
}
