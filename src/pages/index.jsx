import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StlyedMain = styled.main`
  background: #f5f7fb;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const Content = styled.section`
  font-family: "Inter", sans-serif;
  text-align: center;
  padding: 2rem;
`;
const Title = styled.h1`
  font-family: "Karla", sans-serif;
`;
const Paragraph = styled.p`
  color: #293264;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-weight: 400;
`;
const Button = styled.button`
  background-color: #4d5b9e;
  color: #f5f7fb;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 500;
  padding: 1em 4em;
  border: none;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <StlyedMain>
      <Content>
        <Title>Quizzical</Title>
        <Paragraph>Some description if needed</Paragraph>
        <Link to="/quiz">
          <Button>Start quiz</Button>
        </Link>
      </Content>
    </StlyedMain>
  );
};

export default Home;
