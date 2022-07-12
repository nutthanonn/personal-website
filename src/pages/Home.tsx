import styled from "styled-components";
import Myname from "../components/MyName";

export default function Home() {
  return (
    <div>
      <Center>
        <Myname />
      </Center>
    </div>
  );
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #222831;
`;
