import { useState } from 'react';

import { Todo } from '../types/todo';
import { TodoApi } from '../api/todoApi';

// Implement this
export function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos =  () => {
       TodoApi.getTodos()
           .then(todos => {
             setTodos(todos)
           })
           .catch(error => {
             console.log(error)
           });
           
  }

  const handleAddTodo = (text: string) => {
    const createdAt = new Date();
    const _id: string = new Date().valueOf().toString()

     const newTodo: Todo = {
       id: _id,
       text,
       createdAt,
       completed: false
     }

     setTodos(prev => [...prev, newTodo])
  }

  const handleUpdateTodo = (id: string, completed: boolean) => {
      const filteredTodo = todos.find( item => item.id == id);
     
     filteredTodo ? filteredTodo.completed = !completed : null

      setTodos([...todos, ])
  }

  const handleDeleteTodo = (id: string) => {
    const filterEdTodos = todos.filter(item => item.id !== id)
    
    if(todos.length){
      setTodos(filterEdTodos)
    }
  }
  
  return {
    todos,
    getTodos,
    handleAddTodo,
    handleUpdateTodo,
    handleDeleteTodo
  }
}