import React, { ReactNode } from "react";

interface wrapper {
  children: ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: wrapper) => {
  return (
    <div
      className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
