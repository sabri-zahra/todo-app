'use client';
import { Grid } from '@mui/material';
import { TaskCard } from '../UI/TaskCard';
import { useAppSelector } from '@/store';

export const TaskList = () => {
  const todos = useAppSelector((state) => state.todos);
  return (
    <Grid container spacing={2}>
      {todos.map((todo) => (
        <TaskCard {...todo} key={todo.id} />
      ))}
    </Grid>
  );
};