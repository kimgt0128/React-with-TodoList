import React from "react"
import "./todoCreate.css"
function TodoCreate() {
    const handlePress = (e) => {
    if(e.key === 'Enter'){
        //createTodo함수실행
        alert(`입력한 한 일: ${e.target.value}`)
    }

    }
    return (
        <div className="todoCreateBox">
            <input 
            type="text" 
            autoFocus placeholder="할일 입력 후 Enter"
            onKeyDown={handlePress}></input>
        </div>
    )

}
export default TodoCreate;