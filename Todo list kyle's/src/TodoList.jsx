import { Todo } from "./Todo";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <h2 className="todo-header">Todo List</h2>
      {todos.length === 0 && "Add task to finish..."}
      <ul className="todo-lists">
        {todos.map((todo) => {
          return (
            <Todo
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}
