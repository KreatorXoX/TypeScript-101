import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo = () => {
  const todosCtx = useContext(TodosContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
    inputRef.current!.value = "";
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="input__field">
        <label htmlFor="todoText">Todo Text</label>
        <input id="todoText" type="text" ref={inputRef} />
      </div>
      <button>Save</button>
    </form>
  );
};

export default NewTodo;
