"use client";
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '@/store';
import { date } from 'zod';
interface ITodo{
  id: number;
    title: string;
    is_completed: boolean;
    description: string;
    date: Date;
}

export default function SearchForm() {
  
  const Todos = useAppSelector((state) => state.todos);
  
  const [ filtered, setFiltered ] = 
    React.useState<ITodo[]>([]);
  const handleChange = (event:any) => {
    const filteredTodo = Todos.filter(todo => todo.title.startsWith(event));
    setFiltered(filteredTodo);
  };
  
  return (
    <Box sx={{width: 250,
        height: 35,
        backgroundColor: 'white',
        borderRadius: 3,
        '&:hover': {
          backgroundColor: 'white.main',
          opacity: [0.9, 0.8, 0.7],
        },
}}>
      
      <TextField
        id="input-with-icon-textfield"
        label="search your to do"
        // value={query} 
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="With sx" variant="standard" />
      </Box> */}
    </Box>
  );
}