import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { InitialTodoState, Todo } from './todoType';
import { AddTodoValues, UpdateTodoValues } from '@/Utils/todo';


const initialState: InitialTodoState = [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddTodoValues>) => {
      const { description, title } = action.payload;
      state.unshift({
        id: state.length + 1,
        title,
        description,
        is_completed: false,
        date: new Date(),
      });
    },
    updateTodo: (state, action: PayloadAction<UpdateTodoValues & { id: number }>) => {
      const { id, title, description, is_completed } = action.payload;
      state.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
          todo.description = description;
          todo.is_completed = is_completed;
        }
        return todo;
      });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const itemIndex = state.findIndex((t) => t.id === id);
      state.splice(itemIndex, 1);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;