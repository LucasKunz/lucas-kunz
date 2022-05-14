import type { NextPage } from "next";


import styled from "styled-components";
import TypeWrite from "../components/TypeWrite";
import TextPortrait from "../components/TextPortrait";
import Head from "next/head";


const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1250px;
  overflow-x: hidden;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lucas Kunz | Portifolio</title>
      </Head>
      <Container>
        <TypeWrite />
        <TextPortrait />
      </Container>
    </>
  );
};

export default Home;
