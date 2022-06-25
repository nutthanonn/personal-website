import Head from 'next/head';
import styled from 'styled-components';
import Myname from '@/components/MyName';

export default function Home() {
  return (
    <div>
      <Head>
        <title>nutthanon portfolio</title>
        <meta name="description" content="nutthanon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
