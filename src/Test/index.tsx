import React from "react";

type GreetingPorps = {
  name: string;
};

const Greetings: React.FC<GreetingPorps> = ({ name }) => <div>hello </div>;

export default Greetings;
