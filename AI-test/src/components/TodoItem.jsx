import { FaCheck } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import "../styles/TodoItem.scss";

function TodoItem({ todo }) {

    return (

        <div className="todo-item">

            {/* 할 일 글씨 */}

            <span>

                {todo.text}

            </span>

            {/* 버튼 영역 */}

            <div className="todo-btn">

                <button className="check">

                    <FaCheck />

                </button>

                <button className="edit">

                    <FaPen />

                </button>

                <button className="delete">

                    <FaTrash />

                </button>

            </div>

        </div>

    );

}

export default TodoItem;