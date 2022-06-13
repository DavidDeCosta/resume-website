import React, { useEffect } from "react";
import "./Navbar.css"

const Navbar = () => {
    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll= () =>{
        const offset = window.scrollY;
        if(offset > 50){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }
    useEffect(() =>{
        window.addEventListener('scroll',handleScroll)
    })
    let navbarClasses=['navbar'];
    if(scrolled){
        navbarClasses.push('scrolled');
    }
    return(
        <body>
            <header className={navbarClasses.join(" ")}>
            <p>David DeCosta</p>
            <nav>
                <ul className="nav_links">
                    <li><a href= "#">Resume</a></li>
                    <li><a href= "#">Stuff</a></li>
                </ul>
            </nav>
            </header>
        </body>
    )
}

export default Navbar