import React from 'react'
import './todoHead.css'

const today = new Date();
const dateString = today.toLocaleDateString('ko-KR', {
  year: 'numeric',
  month: 'long',
  day:'numeric'
})
const dayName = today.toLocaleDateString('ko-KR', 
  {weekday: 'long'});

function TodoHead() {
    return (
      <div className='todoHeadBox'>
        <h1>{dateString}</h1>
        <p>{dayName}</p>
        <div className='tasksLeft'>할 일 1개남음</div>
      </div>
    )
  }
  
  export default TodoHead;