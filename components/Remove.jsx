import { HiOutlineTrash } from "react-icons/hi"

export default function Remove() {
    return (
        <button className='text-red-400 font-bold p-2'>
            <HiOutlineTrash size={24} />
        </button>
    )
}