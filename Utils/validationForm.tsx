import * as z from 'zod';

export const addTodoSchema = z.object({
  title: z
    .string({ required_error: 'Title is Required' })
    .min(4, { message: 'Title must be at least 4 characters' })
    .max(15, { message: 'Title length must be under 15 char.' }),
  description: z
    .string({ required_error: 'Description is Required' })
    .min(8, { message: 'Description must be at least 8 characters' })
    .max(90, { message: 'Description length must be under 90 char.' }),
});
export type AddTodoValues = z.infer<typeof addTodoSchema>;

export const updateTodoSchema = z.object({
  title: z
    .string({ required_error: 'Title is Required' })
    .min(4, { message: 'Title must be at least 4 characters' })
    .max(15, { message: 'Title length must be under 15 char.' }),
  description: z
    .string({ required_error: 'Description is Required' })
    .min(8, { message: 'Description must be at least 8 characters' })
    .max(90, { message: 'Description length must be under 90 char.' }),
  is_completed: z.boolean(),
});
export type UpdateTodoValues = z.infer<typeof updateTodoSchema>;
