'use client';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import {grey} from "@mui/material/colors"
import { deleteTodo, useAppDispatch } from '@/store';

import { Todo } from '@/types';
import Link from 'next/link';
//import { tokens } from '@/utils/constants';

type Props = Todo & {};

export const TaskCard = ({ description, date, title, id, is_completed }: Props) => {
  const _ = useAppDispatch();
  const themeMode = useTheme().palette.mode;
  const CardBgColor = is_completed ? grey[400] : null;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ minWidth: 275, backgroundColor: CardBgColor }}>
        <CardContent>
          <Grid container>
            <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                sx={{
                  fontSize: 14,
                  overflow: 'hidden',
                  textTransform: 'uppercase',
                }}
                color='text.secondary'
                gutterBottom
              >
                {title}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                {new Date(date).toLocaleDateString('en-UK', {
                  dateStyle: 'medium',
                })}
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Box
            fontSize='h5.fontSize'
            component='p'
            overflow='hidden'
            whiteSpace='pre-line'
            textOverflow='ellipsis'
            height={70}
            margin={0}
          >
            {description}
          </Box>
          <span>{is_completed ? 'completed' : 'not completed'}</span>
        </CardContent>
        <CardActions>
          <Button
            sx={{ boxShadow: 'none', '&:hover': { boxShadow: 'none' }, mr: 1 }}
            variant='contained'
            size='small'
            component={Link}
            href={`/editTodo/${id}`}
          >
            Edit
          </Button>

          <Button
            sx={{ boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}
            variant='outlined'
            color='inherit'
            size='small'
            onClick={() => _(deleteTodo(id))}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
