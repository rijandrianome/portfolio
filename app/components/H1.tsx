import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const H1 = (prop: Props) => {
  return (
    <>
      <h1 className="text-center mb-4 text-4xl font-medium leading-none tracking-tight md:text-4xl lg:text-4xl dark:text-white">
        {prop.children}
      </h1>
    </>
  );
};

export default H1;
