import React from "react"
import "./todoCreate.css"
function TodoCreate() {
    return (
        <div className="todoCreateBox">
            <input type="text" autoFocus placeholder="할일 입력 후 Enter"></input>
        </div>
    )

}
export default TodoCreate;