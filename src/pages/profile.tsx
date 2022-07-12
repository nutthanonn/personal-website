import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProfileImg from "../components/profileImg";
import PersonalInformation from "../components/PersonalInformation";
import Timeline from "../components/timeline";

const Profile: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <LeftComponents>
          <ProfileImg />
          <PersonalInformation />
        </LeftComponents>
        <RightComponents>
          <Timeline />
        </RightComponents>
      </Container>
    </div>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  padding-top: 100px;
  @media (max-width: 850px) {
    flex-direction: column;
  }
  max-height: 80vh;
`;

const LeftComponents = styled.aside`
  margin: 40px 70px;
  width: 30%;
`;

const RightComponents = styled.aside`
  margin: 40px 70px;
  width: 50%;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
`;
