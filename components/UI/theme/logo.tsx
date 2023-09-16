'use client';
import Link from 'next/link';
import { useAppSelector } from '@/store';
import LogoImage from '@/public/logo.svg';

export const Logo = () => {
  const isDarkMode = useAppSelector((state) => state.theme.mode === 'dark');
  return (
    // <Link href='/'>
      <LogoImage width='200' height='35' fill={isDarkMode ? '#ffffff' : '#111111'} />
    // </Link>
  );
};
