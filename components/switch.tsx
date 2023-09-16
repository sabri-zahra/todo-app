'use client';

import { styled, Switch } from '@mui/material';

export const StyledThemeSwitch = styled(Switch)(({ theme }) => ({
  padding: 6,
  '& .MuiSwitch-track': {
    borderRadius: 48 / 2,
    backgroundColor: `${theme.palette.background.paper} !important`,
    opacity: 1,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 14,
      height: 14,
    },
    '&:before': {
      color: theme.palette.common.white,
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" stroke-width="2" stroke="currentColor" width="16" fill="none" viewBox="0 0 24 24"><path color="white" stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"  /></svg>')`,
      left: 12,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" fill="none" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.common.black,
      )}" stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));
