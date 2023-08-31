'use client';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type Props<T extends FieldValues> = { control: Control<T, any>; name: Path<T>; label: string };

export const Checkbox = <T extends FieldValues>({ control, name, label }: Props<T>) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <FormControlLabel
              label={label}
              control={
                <MuiCheckbox
                  size='small'
                  checked={field.value}
                  onChange={(_, checked) => field.onChange(checked)}
                />
              }
            />
          );
        }}
      />
    </>
  );
};
