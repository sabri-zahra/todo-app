'use client';
import { Stack } from '@mui/material';
import { TextField } from '@/components/UI/textField';
import { AddTodoValues, addTodoSchema } from '@/Utils/validationForm';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { addTodo, useAppDispatch } from '@/store';

type Props = {
  insideModal?: boolean;
};
export const AddTodoForm = ({ insideModal }: Props) => {
  const _ = useAppDispatch();
  const router = useRouter();
  const { control, handleSubmit } = useForm<AddTodoValues>({
    resolver: zodResolver(addTodoSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    shouldFocusError: true,
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const handleCloseModal = () => {
    insideModal ? router.back() : router.push('/');
  };

  const onSubmit = (data: AddTodoValues) => {
    _(addTodo(data));
    handleCloseModal();
  };
  return (
    <Stack
      component='form'
      sx={{ height: '130px' }}
      spacing='12px'
      id='add-todo-form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField placeHolder='Title' control={control} name='title' />
      <TextField placeHolder='Description' control={control} name='description' />
    </Stack>
  );
};
