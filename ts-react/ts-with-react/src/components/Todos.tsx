import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const Todos = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <div className="todo__list">
      {todosCtx.items?.map((el) => (
        <TodoItem key={el.id} item={el} remove={todosCtx.removeTodo} />
      ))}
    </div>
  );
};

export default Todos;
