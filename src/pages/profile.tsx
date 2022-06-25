import React from 'react';
import Head from 'next/Head';
import PersonalInformation from '@/components/PersonalInformation';
import ProfileImg from '@/components/profileImg';
import Timeline from '@/components/timeline';
import styled from 'styled-components';
import Navbar from '@/components/Navbar';

const Profile: React.FC = () => {
  return (
    <div>
      <Head>
        <title>nutthanon portfolio</title>
        <meta name="description" content="nutthanon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
  margin-top: 100px;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const LeftComponents = styled.aside`
  margin: 40px 70px;
  width: 30%;
`;

const RightComponents = styled.aside`
  margin: 40px 70px;
  width: 70%;
`;
