import { useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import "../styles/TodoContainer.scss";

function TodoContainer() {

    // -------------------------------
    // 할 일 목록(State)
    // 기능 구현 시 사용할 예정
    // -------------------------------
    const [todos, setTodos] = useState([]);

    return (

        <div className="todo-container">

            <h1>Todo List</h1>

            {/* 입력창 */}
            <TodoInput
                todos={todos}
                setTodos={setTodos}
            />

            {/* 목록 */}
            <TodoList
                todos={todos}
                setTodos={setTodos}
            />

        </div>

    );

}

export default TodoContainer;