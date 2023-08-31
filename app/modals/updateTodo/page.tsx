// 'use client';
import { Button } from '@mui/material';
import React from 'react';
import { UpdateTodoForm } from '@/components/form/updateTodo';
import { BaseModal } from '@/components/UI/BaseModal';

type Props = { params: { id: number } };



// import { UpdateTodoModal } from '@/components/domains/update';



const UpdateModal = ({ params }: Props) => {
  const { id } = params;
  const action = (
    <Button type='submit' form='update-todo-form' variant='contained'>
      update
    </Button>
  );
  return (
    <BaseModal title='update Todo' action={action}>
      <UpdateTodoForm todoId={id} insideModal />
    </BaseModal>
  );
};

export default UpdateModal;
