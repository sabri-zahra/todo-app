'use client';
import { notFound, useRouter } from 'next/navigation';
import  {useForm}  from 'react-hook-form';
import { Stack } from '@mui/material';
import  {zodResolver}  from '@hookform/resolvers/zod';
import { updateTodo, useAppDispatch, useAppSelector } from '@/store';

import { Checkbox } from '@/components/UI/checkBox';
import { TextField} from '@/components/UI/textField';
import { UpdateTodoValues, updateTodoSchema } from '@/Utils/validationForm';
import { Todo } from '@/types';

type Props = {
  todoId: number;
  insideModal?: boolean;
};

export const UpdateTodoForm = ({ insideModal, todoId }: Props) => {
  const router = useRouter();
  const _ = useAppDispatch();
  const todo = useAppSelector((state) => (state.todos as Todo[]).find((t) => t.id === todoId));

  const { control, handleSubmit } = useForm<UpdateTodoValues>({
    resolver: zodResolver(updateTodoSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    shouldFocusError: true,
    defaultValues: {
      title: todo?.title ?? '',
      description: todo?.description ?? '',
      is_completed: todo?.is_completed ?? false,
    },
  });

  if (!todo) {
    return notFound();
  }
  const handleCloseModal = () => {
    insideModal ? router.back() : router.push('/');
  };

  const onSubmit = (data: UpdateTodoValues) => {
    _(updateTodo({ ...data, id: todoId }));
    handleCloseModal();
  };
  return (
    <Stack
      component='form'
      sx={{ height: '170px' }}
      justifyContent='space-between'
      id='update-todo-form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack gap='12px'>
        <TextField placeHolder='Title' control={control} name='title' />
        <TextField placeHolder='Description' control={control} name='description' />
      </Stack>
      <Stack direction='row' alignItems='center' gap={1}>
        <Checkbox label='Completed? check the box.' control={control} name='is_completed' />
      </Stack>
    </Stack>
  );
};
