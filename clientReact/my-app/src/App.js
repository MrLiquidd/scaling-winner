import React from "react";
import render from 'react-dom';
import TodoList from './componets/Tudo/TodoList'

function App() {
  const todos = [
    { id: 1, commpleted: false, title: 'Купить хлеб' },
    { id: 2, commpleted: false, title: 'Купить масло' },
    { id: 3, commpleted: false, title: 'Купить молоко' },
  ]

  return (
    <div className="wrapper" >
      <h1>React tutor</h1>

      <TodoList todos={todos} />
    </div>
  )
}

export default App;