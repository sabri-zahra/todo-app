'use client';
import { TextField as MuiTextField } from '@mui/material';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type Props<T extends FieldValues> = {
  control: Control<T, any>;
  name: Path<T>;
  placeHolder: string;
  multiline?: boolean;
  maxRows?: number;
};

export const TextField = <T extends FieldValues>({
  control,
  name,
  placeHolder,
  multiline = false,
  maxRows = 2,
}: Props<T>) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <MuiTextField
            helperText={!!error ? `*${error.message}` : ''}
            size='small'
            variant='outlined'
            multiline={multiline}
            maxRows={maxRows}
            FormHelperTextProps={{
              sx: { color: (theme) => theme.palette.error.main },
            }}
            label={placeHolder}
            {...field}
          />
        )}
      />
    </>
  );
};
