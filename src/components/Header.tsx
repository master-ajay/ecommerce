import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import "../assets/logo.svg";

export default function Header() {
  const [show, setShow] = useState<string>("translate-y-0");
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      AJAY
      <Wrapper>
        <Link href="/">
          <img src="src/assets/logo.svg" className="w-[40px] md:w-[60px]" />
        </Link>
      </Wrapper>
    </header>
  );
}
