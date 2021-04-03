import React from "react";
import styled from "styled-components";
import bg from "../Images/rb-logo.webp";

const Container = styled.div`
  height: 90vh;
  width: 100%;
  background: url(${bg}) center no-repeat;
`;

const Home = () => {
  return <Container />;
};

export default Home;
