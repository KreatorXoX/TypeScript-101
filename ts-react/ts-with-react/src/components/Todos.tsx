import Todo from '../models/todo'
import TodoItem from './TodoItem'

type PropTodoType = {
  items: Todo[];
  onRemove(id:string):void;
}

const Todos = ({ items, onRemove }: PropTodoType) => {
  return (
    <div className='todo__list'>
      {items?.map((el) => (
        <TodoItem key={el.id} item={el} remove={onRemove} />
      ))}
    </div>
  )
}

export default Todos
