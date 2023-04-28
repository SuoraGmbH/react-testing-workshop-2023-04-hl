import { Header, Main } from "../component/Layout";
import React from "react";
import Greeting from "./Home/Greeting";

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Header>Welcome</Header>
      <Main>
        <Greeting />
      </Main>
    </>
  );
};

export default Home;
