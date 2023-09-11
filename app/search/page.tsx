'use client';
import  Link  from "next/link";
import { Provider } from "react-redux";
import { Button, Stack, Typography } from '@mui/material';
import {store1} from '@/store';
import SearchForm from "@/components/SearchForm"; 
// import { TaskList } from '../components/Home/taskList';
export default function searchResults  () {
<div>
<Stack direction='row' alignItems='center' py={2} justifyContent='space-between'>
        <Typography variant='h5'>Your Related Todos</Typography>
        return (
    <Provider store={store1}>
      <SearchForm />
    </Provider>
  );
      </Stack>
      {/* <TaskList /> */}
</div>
}