import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    link: "/movies",
    id: "header-link-movies",
  }
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <div className="Nav_style">
      {
        //map through the link ad display it in header
        links.map((ele) => {
          console.log("data :", ele)
          return (
            <>
              <NavLink to={ele.link} style={{marginRight:"30px"}}>{ele.title}</NavLink>
            </>
          )
        })
      }
    </div>

  );
};
