import React from "react";
import ShoeImage from "../../public/assets/product-1.webp";
import Image from "next/image";

const CartItem = () => {
  return (
    <div>
      <div className="shrink-0">
        <Image src={ShoeImage} alt="" />
      </div>
      <div className={""}></div>
    </div>
  );
};

export default CartItem;
