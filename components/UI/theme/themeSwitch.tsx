'use client';
import { Fragment } from 'react';
import { useAppDispatch, useAppSelector, toggleTheme } from '@/store';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
// import LightIcon from '@/assets/icons/light.svg';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import DarkIcon from '@/assets/icons/dark.svg';

export const ThemeSwitch = () => {
  const _ = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);
  const handleClick = () => {
    _(toggleTheme());
  };

  return (
    <Fragment>
      <IconButton onClick={handleClick}>
        {theme === 'dark' ? (
          <LightModeIcon style={{ width: '28px', height: '28px' }} />
        ) : (
          <DarkModeIcon style={{ width: '24px', height: '24px' }} />
        )}
      </IconButton>
    </Fragment>
  );
};
