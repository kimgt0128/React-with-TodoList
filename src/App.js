import React from 'react'
import TodoHead from './component/todoHead/todoHead'
import TodoMain from './component/todoMain/todoMain'
import TodoCreate from './component/todoCreate/todoCreate'
import './App.css'




//나중에 캘린더화 함께 pages 폴더로 이동할 에정!
function TodoTemplet() {
  return (
    <div className='todoWrapper'>
      <TodoHead></TodoHead>
      <TodoMain></TodoMain>
      <TodoCreate></TodoCreate>
    </div>
  )
}


function App() {
  return (
    <TodoTemplet></TodoTemplet>
  )
  
}

export default App;
