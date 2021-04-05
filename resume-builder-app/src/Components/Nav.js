import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";
const { Brand } = Navbar;

const NavbarStyled = styled(Navbar)`
  height: 80px;
  justify-content: space-around;
`;

const BrandStyled = styled(Brand)`
  font-weight: 700;
  font-size: 30px;
  color: #00aaff !important;
`;

const NavStyled = styled.div`
  display: flex;
`;

const LinkStyled = styled.div`
  color: #00aaff;
  font-size: 20px;
  padding: 10px;
`;

const Navigation = () => {
  return (
    <>
      <NavbarStyled bg="dark">
        <BrandStyled>RESUME BUILDER</BrandStyled>
        <NavStyled>
          <LinkStyled>
            <NavLink
              to="/"
              activeClassName="active"
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
          </LinkStyled>
          <LinkStyled>
            <NavLink
              to="/new-resume"
              activeClassName="active"
              style={{ textDecoration: "none" }}
            >
              Create New
            </NavLink>
          </LinkStyled>
          <LinkStyled>
            <NavLink
              to="/view-resume"
              activeClassName="active"
              style={{ textDecoration: "none" }}
            >
              View/Edit
            </NavLink>
          </LinkStyled>
        </NavStyled>
      </NavbarStyled>
    </>
  );
};

export default Navigation;
