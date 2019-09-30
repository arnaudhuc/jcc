import * as React from "react";

interface HelloProps {
  compiler: string;
  framework: string;
}

// React.FC = React.FunctionComponent

const HelloComponent: React.FC<HelloProps> = function({ compiler, framework }) {
  return (
    <h1>
      Hello from {compiler} and {framework}!
    </h1>
  );
};

export default HelloComponent;
