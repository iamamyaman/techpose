import React from 'react';
import '../styles/header.css';
import {AiOutlineHome} from "react-icons/ai";
import {RiFlag2Line}from "react-icons/ri";
import {MdOndemandVideo}from "react-icons/md";
import {MdGroups}from "react-icons/md";
import {SiFacebookgaming} from "react-icons/si";
import { Link,LinkProps,useResolvedPath,useMatch} from 'react-router-dom';



const Header =()=>{
  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })
  
    return (
      <div>
        <Link
          style={{ color: match ? "#1877F2" : "gray",borderBottom: match ? "solid 4px #1877F2" : "none"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && ""}
      </div>
    )
  }
  

  return (
    <div className="Header">
      <div className='menu-option'>
        <CustomLink to ="/" > 
          <AiOutlineHome />
        </CustomLink>
      </div>
      <div className='menu-option'>
        <CustomLink to ="/pages"> 
          <RiFlag2Line />
        </CustomLink>
      </div>
      <div className='menu-option'>
         <CustomLink to ="/watch"> 
          <MdOndemandVideo/>
        </CustomLink>
      </div>
      <div className='menu-option'>
        <CustomLink to ="/groups"> 
          <MdGroups/>
        </CustomLink>
      </div>
      <div className='menu-option'>
        <CustomLink to ="/gaming"> 
          <SiFacebookgaming/>
        </CustomLink>
      </div>

    </div>
  );
}

export default Header;
