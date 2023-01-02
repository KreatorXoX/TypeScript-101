import React, { ReactNode, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo(text: string): void;
  removeTodo(id: string): void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, new Todo(text)]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
