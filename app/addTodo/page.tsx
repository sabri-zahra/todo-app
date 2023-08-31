import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { AddTodoForm } from '@/components/form/addTodo';

const CreatePage = () => {
  return (
    <Stack alignItems='center' justifyContent='center'>
      <Container maxWidth='sm' sx={{ mt: 12 }}>
        <Typography variant='h5' component='h2' sx={{ mb: 4 }}>
          Create New Todo
        </Typography>
        <AddTodoForm />
        <Button fullWidth variant='contained' sx={{ mt: 2 }} type='submit' form='add-todo-form'>
          Save
        </Button>
      </Container>
    </Stack>
  );
};

export default CreatePage;
