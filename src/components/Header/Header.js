import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./css/Header.css";

import { Avatar } from "@material-ui/core";
 import { Link } from "react-router-dom";
// import { auth } from "../../firebase";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../feature/userSlice";
import InboxIcon from "@material-ui/icons/Inbox";
import HelpIcon from "@material-ui/icons/Help";
function Header(){
    return(
        <header>
            <div className="header-container">
                <div className="header-left">
                <Link to='/'>
                <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png"
              alt="logo"
            />
                </Link>
                
            <h3>Products</h3>
                </div>
                <div className="header-middle">
                    <div className="header-search-container">
                        <SearchIcon/>
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>
                <div className="header-right">
                 <div className="header-right-container">
                 {window.innerWidth < 768 && <SearchIcon />}

<Avatar
  style={{
    cursor: "pointer",
  }}
//   {...stringAvatar(user && user.displayName)}
//   onClick={() => auth.signOut()}
/>
                     <InboxIcon/>
                     <HelpIcon/>
                     <svg
              aria-hidden="true"
              class="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,0.5)"
              style={{
                cursor: "pointer",
              }}
            >
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            </svg>
                 </div>
                </div>
            </div>
        </header>
    )
}
     
export default Header;