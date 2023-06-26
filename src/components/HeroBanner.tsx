import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack, BiArrowToRight } from "react-icons/bi";
import Slide1 from "../../public/assets/slide-1.png";
import Slide2 from "../../public/assets/slide-2.png";
import Slide3 from "../../public/assets/slide-3.png";
import Image from "next/image";
const HeroBanner = () => {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        // showArrows={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg text-white" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg text-white" />
          </div>
        )}
      >
        <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
          <Image
            src={Slide1}
            alt={""}
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-owsald
          bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
          text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90
          "
          >
            Shop now
          </div>
        </div>
        <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
          <Image
            src={Slide2}
            alt={""}
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-owsald
          bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
          text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90
          "
          >
            Shop now
          </div>
        </div>
        <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
          <Image
            src={Slide3}
            alt={""}
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-owsald
          bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
          text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90
          "
          >
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
