'use client';
import Link from "next/link";
 import Grid from "@mui/material/Unstable_Grid2/Grid2";
import HomeIcon from '@mui/icons-material/Home';
import SearchForm from "./SearchForm";
import { Logo, ThemeSwitch } from './UI/theme';


export default function Header(){
    return (
        <header className="header">
            
                <div className="logo">
                    <h3><span><Link href='/' className="my-link"><HomeIcon sx={{ fontSize: 40 }}/></Link> </span></h3>
                </div>
                
                
                <Grid  xs={6}> 
                {/* <Logo /> */}
      <ThemeSwitch />
          </Grid>
              {/* </Grid> */}
        </header>
    )
} 