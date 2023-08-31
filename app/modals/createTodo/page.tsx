import { Button } from '@mui/material';

import { BaseModal } from '@/components/UI/BaseModal';
import { AddTodoForm } from '@/components/form/addTodo';


const CreateModal = () => {
    const action = (
        <Button type='submit' form='add-todo-form' variant='contained'>
          Save
        </Button>
      );
      return (
        <BaseModal title='Add Todo' action={action}>
          <AddTodoForm insideModal />
        </BaseModal>
      );
  };
  
  export default CreateModal;
  