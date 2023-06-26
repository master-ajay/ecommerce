import React from "react";
import { Carousel } from "react-responsive-carousel";
import p1 from "../../public/assets/p1.png";
import p2 from "../../public/assets/p2.png";
import p3 from "../../public/assets/p3.png";
import p4 from "../../public/assets/p4.png";
import p5 from "../../public/assets/p5.png";
import p6 from "../../public/assets/p6.png";
import Image from "next/image";

const ProductDetailsCarousel = () => {
  const images = [p1, p2, p3, p4, p5, p6];

  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        showThumbs
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
        renderThumbs={() =>
          images.map((item, id) => <Image key={id} src={item} alt="" />)
        }
      >
        <Image src={p1} alt={""} />
        <Image src={p2} alt={""} />
        <Image src={p3} alt={""} />
        <Image src={p4} alt={""} />
        <Image src={p5} alt={""} />
        <Image src={p6} alt={""} />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
