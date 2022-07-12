import React from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

const Navbar: React.FC = () => {
  return (
    <NavCustom>
      <Github
        onClick={() => (window.location.href = "https://github.com/nutthanonn")}
      />
    </NavCustom>
  );
};

export default Navbar;

const NavCustom = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 50px;
  background-color: #393e46;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
`;

const Github = styled(BsGithub)`
  background-color: #393e46;
  height: 30px;
  width: 30px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  display: inline-block;

  &:hover {
    color: white;
    transition: 1s;
  }
`;
