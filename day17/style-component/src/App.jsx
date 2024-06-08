// import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <Wrapper className="wrapper">
      <Title>Helo, Style Component</Title>
    </Wrapper>
  );
};

const Title = styled.h1`
  font-family: monospace;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 4em;
  background-color: papayawhip;
`;
export default App;
