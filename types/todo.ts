export type Todo = {
    id: number;
    title: string;
    is_completed: boolean;
    description: string;
    date: Date;
  };
  
  export type InitialTodoState = Todo[];
  