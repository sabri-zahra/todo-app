'use client';
import Link from "next/link";
 import Grid from "@mui/material/Unstable_Grid2/Grid2";
import HomeIcon from '@mui/icons-material/Home';
import SearchForm from "./SearchForm";
export default function Header(){
    return (
        <header className="header">
            {/* <Grid container columnSpacing={{ xs: 4, sm: 1, md: 3 }}>
            <Grid  xs={6}> */}
                <div className="logo">
                    <h3><span><Link href='/' className="my-link"><HomeIcon sx={{ fontSize: 40 }}/></Link> </span></h3>
                </div>
                {/* </Grid> */}
                
                <Grid  xs={6}> 
              <SearchForm/>    
          </Grid>
              {/* </Grid> */}
        </header>
    )
} 