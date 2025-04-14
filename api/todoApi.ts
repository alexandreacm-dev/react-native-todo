import { Todo } from '../types/todo';

// In-memory "database"
let todos: Todo[] = [
  {
    id: '1',
    text: 'Learn React Native',
    completed: true,
    createdAt: new Date(),
  },
  {
    id: '2',
    text: 'Learn TypeScript',
    completed: false,
    createdAt: new Date(),
  },
  {
    id: '3',
    text: 'Build a Todo App',
    completed: false,
    createdAt: new Date(),
  },
];

// Simulate network delay
// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// API functions
export const TodoApi = {
  // Get all todos
  async getTodos(): Promise<Todo[]> {
    // await delay(800); // Simulate network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          [...todos].sort((a, b) => {
            if (a.completed !== b.completed) {
              return a.completed ? 1 : -1; // Move completed to the end
            }
            return b.createdAt.getTime() - a.createdAt.getTime(); // Sort by createdAt
          })
        )
      }, 800);
    });
  },

  // Add a new todo
  async addTodo(text: string): Promise<Todo> {
    let newTodo: Todo = {} as Todo;
    // await delay(500);
    const newPromise = new Promise((resolve) => setTimeout(() => {
      newTodo = {
        id: Date.now().toString(),
        createdAt: new Date(),
        text,
        completed: false,
      }

      todos = [...todos, newTodo];
      resolve(newTodo)
    }, 500)) as Promise<Todo>;


    return newPromise
  },

  // Toggle todo completion status
  async updateTodoStatus(id: string, completed: boolean): Promise<Todo> {
    // await delay(300);
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new Error('Todo not found');
    }

    const updatePromise = new Promise(resolve => {
      setTimeout(() => {
        const updatedTodo = { ...todos[todoIndex], completed };
        todos = [
          ...todos.slice(0, todoIndex),
          updatedTodo,
          ...todos.slice(todoIndex + 1),
        ];

        resolve(updatedTodo)
      }, 300);
    }) as Promise<Todo>;

    return updatePromise
  },

  // Delete a todo
  async deleteTodo(id: string): Promise<string> {
    // await delay(600);
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new Error('Todo not found');
    }

    return new Promise(resolve => {
      setTimeout(() => {
        todos = [...todos.slice(0, todoIndex), ...todos.slice(todoIndex + 1)];
        resolve(id)
      }, 600);
    });
  },
};
