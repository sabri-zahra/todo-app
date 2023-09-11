import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { InitialTodoState, Todo } from './todoType';
import { AddTodoValues, UpdateTodoValues } from '@/Utils/todo';


const initialState: InitialTodoState = {todos: [], filteredTodo: []};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddTodoValues>) => {
      const { description, title } = action.payload;
      state.todos.unshift({
        id: state.todos.length + 1,
        title,
        description,
        is_completed: false,
        date: new Date(),

      });
state.filteredTodo = state.todos;
    },
    updateTodo: (state, action: PayloadAction<UpdateTodoValues & { id: number }>) => {
      const { id, title, description, is_completed } = action.payload;
      state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
          todo.description = description;
          todo.is_completed = is_completed;
        }
        return todo;
      });
      state.filteredTodo = state.todos;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const itemIndex = state.todos.findIndex((t) => t.id === id);
      state.todos.splice(itemIndex, 1);
      state.filteredTodo = state.todos;
    },
    filterTodo: (state, action: PayloadAction<Todo[]>) =>
    {
state.filteredTodo = action.payload;
    }
  },
});

export const { addTodo, updateTodo, deleteTodo, filterTodo } = todoSlice.actions;
export default todoSlice.reducer;