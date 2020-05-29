import * as React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Main: React.SFC<HelloProps> = (props) => {
  return (
    <h1>
      Hello from {props.compiler} и {props.framework}!
    </h1>
  );
};
