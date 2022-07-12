import React from "react";
import styled, { keyframes } from "styled-components";

const Myname: React.FC = () => {
  function handleClickChangePath(event: React.MouseEvent) {
    window.location.href = window.location.origin + "/profile";
  }

  return <Name onClick={handleClickChangePath}>Nutthanon</Name>;
};

export default Myname;

const showAnimation = keyframes`
  0% {
    transform: translateY(100);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
`;
const Name = styled.p`
  position: relative;
  display: inline-block;
  cursor: pointer;
  color: #00adb5;
  text-transform: uppercase;
  font-size: 50px;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
    transform: scaleX(0);
    background-color: white;
    border-radius: 15px;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:after {
    content: " (Click it!!)";
    font-size: 10px;
    color: rgba(0, 173, 181, 0.3);
  }
  animation: ${showAnimation} 4s 1 ease-in;
`;
