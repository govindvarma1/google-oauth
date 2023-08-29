import React, { useState } from "react";
import styled from "styled-components";
import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Header() {
  const [path, setPath] = useState("/profile");
  function handleClick() {
    if (path === "/profile") {
      setPath("/");
    } else {
      setPath("/profile");
    }
  }
  return (
    <NavBar>
      <h1>Authetication</h1>
      <Link to={path} className="Link">
        <div className="profile" onClick={handleClick}>
          <BiSolidUser />
        </div>
      </Link>
    </NavBar>
  );
}

const NavBar = styled.div`
  background-color: #00152b;
  color: white;
  padding: 0 5%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  .Link > .profile {
    font-size: 2rem;
    color: white;
  }
`;
