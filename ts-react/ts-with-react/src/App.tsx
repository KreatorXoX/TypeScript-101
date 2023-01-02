import Todos from './components/Todos'
import NewTodo from './components/NewTodo'
import Todo from './models/todo'
import { useState } from 'react'
function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const getNewTodo = (text: string) => {
    setTodos(prev => [...prev, new Todo(text)])
  }
  const removeTodo = (id: string) => {
    setTodos(prev => prev.filter(item => item.id !== id))
  }
  return (
    <div className='todos'>
      <NewTodo addTodo={getNewTodo} />
      <Todos items={todos} onRemove={removeTodo} />
    </div>
  )
}

export default App
