import { Button, Container, Stack, Typography } from '@mui/material';
import { UpdateTodoForm } from '@/components/form/updateTodo';

type Props = { params: { id: string } };

const CreatePage = ({ params }: Props) => {
  return (
    <Stack alignItems='center' justifyContent='center'>
      <Container maxWidth='sm' sx={{ mt: 12 }}>
        <Typography variant='h5' component='h2' sx={{ mb: 4 }}>
          Update Todo
        </Typography>
        <UpdateTodoForm todoId={parseInt(params.id)} />
        <Button fullWidth variant='contained' sx={{ mt: 2 }} type='submit' form='update-todo-form'>
          Save
        </Button>
      </Container>
    </Stack>
  );
};

export default CreatePage;
