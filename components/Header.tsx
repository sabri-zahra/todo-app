'use client';
import Link from "next/link";
import SearchForm from "./SearchForm";
export default function Header(){
    return (
        <header className="header">
            
                <div className="logo">
                    <span><Link href='/' className="my-link">To Do</Link> </span>
                </div>
                {/* <div className="links">
                    <ul className="link">
                        <li><span><Link href='/todo' className="my-link">Todo</Link></span></li>
                        <li><span><Link href='/todo/doing' className="my-link">Doing</Link></span></li>
                        <li><span><Link href='/todo/done' className="my-link">Done</Link></span></li>
                    </ul>
              </div> */}
              <div><SearchForm/></div>    
          

        </header>
    )
} 