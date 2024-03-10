import {React, useState} from 'react';

import './todoMain.css';
import {FaRegCircle,  FaRegCheckCircle  } from "react-icons/fa";


function TodoItem({ id, name, color }) {
  let [isDone, setIsDone] = useState(false);
  const handleCheck = () => {
    setIsDone(!isDone)
  }
  return (
    <div className='todoItemBox'>
      <div className='iconWrapper' onClick={handleCheck}>
        {isDone ? (<FaRegCheckCircle className='icons' color='green'/>
        ) : 
        (<FaRegCircle className='icon'/>
        )}
      </div>
        {name}
    </div>
  );
}

  
  let todolists = [{
    id: 1, //JSX에서 key로 사용됨.
    name: "예외 처리하기",
    done: true
    }, {
    id: 2,
    name: "계층 구조 설계하기",
    done: true
    }, {
    id: 3,
    name: "UI 구현하기",
    done: true
    }, {
    id:4,
    name: "사용자와 상호 작용할 변수 설정",
    done: false
    }
  ]

  function TodoListBlock({children}) {
    return (
      <div>{children}</div>
    );
  }
  
  function TodoListBox(children) {
    return (
      <div className='todoListBox'>

      {todolists.map(todo => (
        

        <TodoListBlock>

          <TodoItem
          key={todo.key}
          id={todo.id}
          name={todo.name}
          //done={isDone}
          color="green"
          ></TodoItem>
        </TodoListBlock>
        ))}
    </div>
)}


function TodoMain() {
    return (
      <div className='todoMainBox'>
        <TodoListBox/>
      </div>
    )
  }

  export default TodoMain;