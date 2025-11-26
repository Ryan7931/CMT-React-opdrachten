import TodoItem from './TodoItem';

function TodoList({ todos }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} text={todo} />
            ))}
        </ul>
    );
}

export default TodoList;