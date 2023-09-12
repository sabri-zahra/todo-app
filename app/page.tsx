// import Image from 'next/image'
// import RootLayout from "./layout"
'use client';
import  Link  from "next/link";
import { Button, Stack, Typography } from '@mui/material'; 
import { TaskList } from '../components/Home/taskList';

export default function HomePage() {
  return (
   <div>
    <main >
    <Stack direction='row' alignItems='center' py={2} justifyContent='space-between'>
        <Typography variant='h5'>Your Todos</Typography>
        <Button 
        sx={{ backgroundColor:  'rgb(63, 63, 232)', '&:hover': { boxShadow: 'none' }, mr: 1 }}
        component={Link} href='/addTodo' variant='contained'>
          Add New Todo
        </Button>
      </Stack>
      <TaskList />
    </main></div>
  )
}
