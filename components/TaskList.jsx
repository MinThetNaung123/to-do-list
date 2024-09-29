import Remove from "./Remove";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTasks = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/task', {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error('Failed to fetch tasks');
        }

        return res.json();

    } catch (error) {
        console.log(error);
    }
};



export default async function TaskList() {
    const { tasks } = await getTasks();
  
    return (
      <>
        {tasks.map((task) => (
          <div key={task._id} className="p-4 border border-slate-400 my-3 flex justify-between gap-5 items-start">
            <div>
              <h2 className="text-xl font-bold">{task.title}</h2>
              <p>{task.description}</p>
            </div>
            <div className="flex">
              <Remove id={task._id} />
              <Link href={`/editTask/${task._id}`}>
                <HiPencilAlt size={24} className="text-blue-400 cursor-pointer" />
              </Link>
            </div>
          </div>
        ))}
      </>
    );
  }
  