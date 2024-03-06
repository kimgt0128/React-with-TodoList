import React from 'react';
import './todoMain.css'

function Task({ id, name, done = true, color }) {
  return (
    done ? <div><del style={{ color: color }}>{id}. {name}</del></div> :
    <div style={{ color: color }}>{id}. {name}</div>
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
          <Task
          key={todo.key}
          id={todo.id}
          name={todo.name}
          done={todo.done}
          color="green"
          ></Task>
        </TodoListBlock>
        ))}
    </div>
)}


function TodoMain() {
    return (
      <div className='todoMainBox'>
        <TodoListBox/>
        {/*TodoCreateBox*/}
      </div>
    )
  }

  export default TodoMain;