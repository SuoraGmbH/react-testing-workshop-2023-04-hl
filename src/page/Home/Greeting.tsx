import React from "react";

interface Props {
  name?: string;
}

const Greeting: React.FunctionComponent<Props> = ({ name }) => {
  if (!name || name.trim() === '') {
    return <div>Hello stranger!</div>;
  }

  return <div>Hello, dear {name}!</div>;
};

export default Greeting;
