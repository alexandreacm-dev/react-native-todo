<h1 align="center">
  <img height="80" alt="" title="" src=".github/icon-todo.png">
</h1>

![cover](.github/cover.png?style=flat)

# ACM React Native TODO

## Overview

You'll build a simple Todo List application using React Native and TypeScript. The application will simulate interaction with a backend API, using provided fake API functions with realistic network delays.

## Requirements

### Functionality

1. Display a list of todos from the provided fake API
2. Add new todos
3. Toggle completion status of todos
4. Delete todos

### Project Structure

The project contains these files to get you started:

- **/api/todoApi.ts**: Fake API service
- **/types/todo.ts**: Todo TypeScript interface
- **/components/AddTodo.tsx**: Component for adding new todos
- **/components/Checkbox.tsx**: The checkbox component
- **/components/TrashButton.tsx**: The trash button component
- **/config/theme.ts**: Colors theme of the project

#### IMPORTANT: Those are the files that you need to implement

- **App.tsx**: Main application component
- **/components/TodoItem.tsx**: Component for rendering individual todo items
- **/hooks/useTodo.ts**: Hook for managing the todos

## Fake API Service

A fake API service is provided with the following functions:

```typescript
// Get all todos
TodoApi.getTodos(): Promise<Todo[]>

// Add a new todo
TodoApi.addTodo(text: string): Promise<Todo>

// Toggle todo completion status
TodoApi.updateTodoStatus(id: string, completed: boolean): Promise<Todo>

// Delete a todo
TodoApi.deleteTodo(id: string): Promise<string>
```

## Todo Interface

```typescript
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
```

## Evaluation Criteria

- **TypeScript implementation**: Proper use of types and interfaces
- **State management**: Correct handling of component and application state
- **API interaction**: Proper handling of async operations
- **Code quality**: Clean, readable, and well-structured code
- **Component design**: Proper separation of concerns

**Feel free to use Google, do not use any AI**

Good luck!# react-native-todo
