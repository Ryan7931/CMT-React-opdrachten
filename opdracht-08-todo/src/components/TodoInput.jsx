function TodoInput({ newTodo, setNewTodo, handleAddTodo }) {
    return (
        <div>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Typ een To-Do..."
        />
            <button onClick={handleAddTodo}>Toevoegen</button>
        </div>
    );
}

export default TodoInput;