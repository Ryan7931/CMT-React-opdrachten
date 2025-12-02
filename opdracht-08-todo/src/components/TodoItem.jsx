import { FaTrashCan } from "react-icons/fa6";

function TodoItem({ text }) {
    return (
        <li className="bg-amber-50 rounded-2xl p-4 m-6 flex items-center justify-between gap-4 text-2xl">
            <span className="truncate">{text}</span>
            <button aria-label="Verwijder" className="text-amber-800 hover:text-red-600">
                <FaTrashCan />
            </button>
        </li>
    );
}

export default TodoItem;