
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';
import { Container } from '@mui/material';

import Providers from './Providers';
import Header from '../components/Header';

const poppins = Poppins({ 
  weight: ['400', '700'],
  subsets: ['latin'], })

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Generated by create next app',
}


export default function RootLayout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Providers>
          {props.modal}
          <Container maxWidth='lg'>
            <Header />
            {props.children}
          </Container>
        </Providers>
        </body>
  </html>
  )
}
