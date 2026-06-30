import TodoItem from "./TodoItem";

import "../styles/TodoList.scss";

function TodoList({ todos, setTodos }) {

    return (

        <div className="todo-list">

            {
                todos.map((todo, index) => (

                    <TodoItem
                        key={index}
                        todo={todo}
                        index={index}
                        todos={todos}
                        setTodos={setTodos}
                    />

                ))
            }

        </div>

    );

}

export default TodoList;