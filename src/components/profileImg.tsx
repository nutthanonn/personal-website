import React from "react";
import styled from "styled-components";
import picture from "../assets/fish.jpeg";

const ProfileImg: React.FC = () => {
  return <ImgCustom src={picture} />;
};

export default ProfileImg;

const ImgCustom = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  background-size: cover;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
