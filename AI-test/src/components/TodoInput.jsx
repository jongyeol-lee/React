import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import "../styles/TodoInput.scss";

function TodoInput({ todos, setTodos }) {

    // 입력창에 입력되는 글자를 저장하는 State
    const [text, setText] = useState("");

    return (

        <div className="todo-input">

            {/* 입력창 */}
            <input
                type="text"
                placeholder="할 일을 입력하세요."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            {/* 추가 버튼 */}
            <button>

                <FaPlus />

            </button>

        </div>

    );

}

export default TodoInput;