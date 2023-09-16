import { darkColors, lightColors } from '@/public/constants/colors';

export const darkTheme = {
  primary: {
    main: darkColors.greenAccent[200],
  },
  secondary: {
    main: darkColors.greenAccent[500],
  },
  neutral: {
    dark: darkColors.grey[700],
    main: darkColors.grey[500],
    light: darkColors.grey[100],
  },
  background: {
    default: darkColors.primary[800],
    paper: darkColors.primary[700],
  },
};
export const lightTheme = {
  primary: {
    main: lightColors.primary[100],
  },
  secondary: {
    main: lightColors.greenAccent[500],
  },
  neutral: {
    dark: lightColors.grey[700],
    main: lightColors.grey[500],
    light: lightColors.grey[100],
  },
  background: {
    default: '#f8f8f8',
    paper: '#ffffff',
  },
};
