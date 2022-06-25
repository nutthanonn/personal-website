import React from 'react';
import styled from 'styled-components';
import { FaUniversity } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const PersonalInformation: React.FC = () => {
  return (
    <InformationElement>
      <Title>nutthanon</Title>
      <PCustom>Hello from Nutthanon</PCustom>
      <PCustom>
        <FaUniversity />
        &nbsp; KMUTT
      </PCustom>
      <PCustom>
        <HiOutlineMail />
        &nbsp; Nutthanon.tho@gmail.com
      </PCustom>
    </InformationElement>
  );
};

export default PersonalInformation;

const InformationElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: rgb(0, 173, 181);
  font-weight: bold;
  font-size: 30px;
`;

const PCustom = styled.p`
  color: white;
  opacity: 0.7;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;
