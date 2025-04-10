# ACM React Native TODO

## Overview

You'll build a simple Todo List application using React Native and TypeScript. The application will simulate interaction with a backend API, using provided fake API functions with realistic network delays.

## Reference Demo

Before you begin coding, please watch this short demo video showing how the finished application should look and behave:

[Video Demo](https://firebasestorage.googleapis.com/v0/b/enzrossi-1520702757332.appspot.com/o/assets%2Fenzrossi-react-native-todo-result.mp4?alt=media&token=e6e6d9b5-ffef-455a-94b1-b9109c89fb19)

## Time Limit

20 minutes

## Requirements

### Functionality

1. Display a list of todos from the provided fake API
2. Add new todos
3. Toggle completion status of todos
4. Delete todos

### Technical Requirements

1. Use the provided TodoApi service in the `/api/todoApi.ts` file and the `/hooks/useTodo.ts`
2. Implement proper TypeScript interfaces

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
