import React, { useEffect, useState } from 'react'
import "./Navbar.scss";
import { Link, useLocation } from 'react-router-dom';
import Gigs from '../pages/gigs/Gigs';

const Navbar = () => {
    const[active,setActive]=useState(false);
    const[open,setOpen]=useState(false);
    const {pathname}=useLocation();
    
    const isActive=()=>{
        window.scrollY >0 ? setActive(true) : setActive(false);
    }

    useEffect(()=>{
        window.addEventListener("scroll",isActive);

        return ()=>{
            window.removeEventListener("scroll",isActive);
        };

    },[]);

    const currentUser={
        id:1,
        username:"md reyaz",
        isSeller:true

    }

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className='container'>
            <div className="logo">
                <Link to="/"className='link'>
                <span className='text'>Job Portal</span>
                <span className='dot'>.</span>

                </Link>
                
            </div>
            <div className="links">
                <span>Fiverr bussiness</span>
                <span>Explore</span>
                <span>English</span>
                <span>sign in</span>
                {!currentUser?.isSeller &&<span>Become a seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="" />
                      <span>{currentUser?.username}</span>
                     {open && <div className="options">
                        {currentUser?.isSeller && (
                            <>
                                <Link className='link' to="/mygigs">Gigs</Link>
                                <Link className='link' to="/add">Add New Gig</Link>
                            </>
                        )}
                        <Link className='link' to="/orders">Orders</Link>
                        <Link className='link' to="/messages">Messages</Link>
                        <Link className='link' to="/Logout">Logout</Link>

                      </div>}
                    </div>
                )}
            </div>

        </div>
        {(active || pathname!=="/") && (
            <>
            <hr />
            <div className="menu">
                <Link className="link menulink" to="/">
                    Graphic Design
                     
                </Link>
                <Link className="link menulink" to="/">
                    Video Animation
                     
                </Link>
                <Link className="link menulink" to="/">
                    Ai Services
                     
                </Link>
                <Link className="link menulink" to="/">
                    Digital Marketing
                     
                </Link>
                <Link className="link menulink" to="/">
                    Music and Audio
                     
                </Link>
                <Link className="link menulink" to="/">
                    Programming & tech
                     
                </Link>
                <Link className="link menulink" to="/">
                    Bussiness services
                     
                </Link>
                <Link className="link menulink" to="/">
                    Lifestyle
                     
                </Link>
               
            </div>
            </>

        )}
        

    </div>
  )
}

export default Navbar;