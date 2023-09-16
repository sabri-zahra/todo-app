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
import { useAppDispatch, useAppSelector } from '@/store';
import { date } from 'zod';
import { filterTodo } from '@/store/todo/todoSlice';


export default function SearchForm() {
  
  const Todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const [ inputValue, setInputValue ] = 
    React.useState<string>('');
  
  const handleChange = (event:any) => {
    
    setInputValue(event.target.value);
  };
  React.useEffect(()=>{
    const filteredTodo = Todos.filter(todo => todo.title.includes(inputValue));
    dispatch(filterTodo(filteredTodo));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[inputValue])
  return (
    <Box sx={{width: 250,
        height: 35,        // backgroundColor: 'white',
        borderRadius: 1,
        '&:hover': {
          backgroundColor: 'white.main',
          opacity: [0.5, 0.4, 0.6],
        },
}}>
      
      <TextField
        id="input-with-icon-textfield"
         label="search your todo"
       value={inputValue} 
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            // <InputAdornment position="start">
              <SearchIcon />
            // </InputAdornment>
          ),
        }}
        variant="standard"
      />
      
    </Box>
  );
}