import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center bg-slate-500 px-8 py-3'>
            <Link className='text-white font-bold' href = {'/'}>To Do List</Link>
            <Link className='bg-white text-black font-bold p-2' href = {'/addTask'}>Add Task</Link>
        </nav>
    )
}