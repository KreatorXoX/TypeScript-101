import { ReactNode } from 'react'
import Todo from '../models/todo'

type PropTodoItem = {
  item: Todo
  remove(id: string): void
  children?: ReactNode
}
const TodoItem = ({ item, remove }: PropTodoItem) => {
  const removeTodoHandler = (id: string) => {
    remove(id)
  }
  return (
    <div className='todo'>
      <div
        onClick={removeTodoHandler.bind(null, item.id)}
        className='todo__item'
      >
        {item.text}
      </div>
      <div className='todo__remove'>Remove</div>
    </div>
  )
}

export default TodoItem
