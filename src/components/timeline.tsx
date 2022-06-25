import React from 'react';
import styled from 'styled-components';
import { TimelineData } from '@/data/timeline';

const Timeline: React.FC = () => {
  return (
    <Container>
      <Sesstion>
        {TimelineData.map((items, index) => {
          return (
            <Detail key={index}>
              <Title>{items.title}</Title>
              <SubTitle>{items.subtitle}</SubTitle>
            </Detail>
          );
        })}
      </Sesstion>
    </Container>
  );
};

export default Timeline;

const Container = styled.div`
  width: 100%;
  padding: 10px;
`;

const Sesstion = styled.ul`
  list-style: none;
`;

const Detail = styled.li`
  border-left: 2px solid rgba(0,0,0,0.4);
  color: #eeeeee;
  padding: 20px;
  position: relative;

  &:before {
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    border-radius: 50%;
    top: 0;
    left: -7px;
    background-color: #eeeeee;
  }
  &:last-child {
    border: 0;
    left: 2px;
  }
`;

const Title = styled.p`
  font-weight: bold;
  color: #00adb5;
`;

const SubTitle = styled.p`
  margin: 10px 0;
  font-weight: lighter;
`;
