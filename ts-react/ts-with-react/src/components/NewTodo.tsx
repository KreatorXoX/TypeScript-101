import React, { useRef } from 'react'

const NewTodo = ({ addTodo }: { addTodo(text: string): void }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    const enteredText = inputRef.current!.value

    if (enteredText.trim().length === 0) {
      return
    }
    addTodo(enteredText)
    inputRef.current!.value = ''
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='input__field'>
        <label htmlFor='todoText'>Todo Text</label>
        <input id='todoText' type='text' ref={inputRef} />
      </div>
      <button>Save</button>
    </form>
  )
}

export default NewTodo
