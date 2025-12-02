import { FaPlus } from "react-icons/fa";

function TodoInput({ newTodo, setNewTodo, handleAddTodo }) {
    return (
        <div className="bg-amber-50 p-4 rounded-2xl mb-8 flex gap-4 text-4xl">
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Typ een To-Do..."
        />
            <button onClick={handleAddTodo}><FaPlus /></button>
        </div>

    );
}

export default TodoInput;