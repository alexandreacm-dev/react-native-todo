import { useState } from 'react';

import { Todo } from '../types/todo';
import { TodoApi } from '../api/todoApi';

// Implement this
export function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = () => {
    TodoApi.getTodos()
      .then(todos => {
        setTodos(todos)
      })
      .catch(error => {
        console.log(error)
      });

  }

  const handleAddTodo = (text: string) => {
    TodoApi.addTodo(text)
      .then(todo => {
        // console.log(todo);
        // setTodos([...todos, todo]);
        getTodos();
      }).catch(error => {
        console.log(error);
      });
  }

  const handleUpdateTodo = (id: string, completed: boolean) => {
    TodoApi.updateTodoStatus(id, completed)
      .then(todo => {
        console.log(todo);
        getTodos();
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleDeleteTodo = (id: string) => {
    TodoApi.deleteTodo(id)
      .then(response => {
        console.log(response);
        getTodos();
      })
      .catch(error => {
        console.log(error);

      })
  }

  return {
    todos,
    getTodos,
    handleAddTodo,
    handleUpdateTodo,
    handleDeleteTodo
  }
}