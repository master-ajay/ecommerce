import React from "react";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>
            {/* Product Subtitle */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>
            <div className="text-lg font-semibold">MRP : ₹ 19 625.00</div>
            <div className="text-md font-medium text-black[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">{`{Also includes all applicable duties}`}</div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>

              {/* SIZE START */}
              <div className="grid grid-cols-3 gap-2">
                <div
                  className="border rounded-md text-center py-3 
                font-medium hover:border-black cursor-pointer"
                >
                  UK 6
                </div>
                <div
                  className="border rounded-md text-center py-3 
                font-medium hover:border-black cursor-pointer"
                >
                  UK 6
                </div>
                <div
                  className="border rounded-md text-center py-3 
                font-medium hover:border-black cursor-pointer"
                >
                  UK 6
                </div>
                <div
                  className="border rounded-md text-center py-3 
                font-medium hover:border-black cursor-pointer"
                >
                  UK 6
                </div>
                <div
                  className="border rounded-md text-center py-3 
                font-medium hover:border-black cursor-pointer"
                >
                  UK 6
                </div>
                <div
                  className="border rounded-md text-center py-3 
                font-medium hover:border-black cursor-pointer"
                >
                  UK 6
                </div>
                <div
                  className="border rounded-md text-center py-3 
                font-medium hover:border-black cursor-pointer"
                >
                  UK 6
                </div>
                <div
                  className="border rounded-md text-center py-3 
                font-medium hover:border-black cursor-pointer"
                >
                  UK 6
                </div>
                <div
                  className="border rounded-md text-center py-3 
                font-medium hover:border-black cursor-pointer"
                >
                  UK 6
                </div>
                <div
                  className="border rounded-md text-center py-3 
                font-medium hover:border-black cursor-pointer"
                >
                  UK 6
                </div>
                <div
                  className="border rounded-md text-center py-3 
                font-medium cursor-not-allowed bg-black/[0.1] opacity-50"
                >
                  UK 6
                </div>
              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium 
            transition-transform active:scale-95 mb-3 hover: opacity-75"
            >
              Add to Card
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHITELIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHITELIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis quibusdam sequi eveniet aliquam aperiam dolores tempora
                adipisci totam quam, iure repudiandae. Natus soluta dolorem quos
                praesentium debitis doloribus, tempora ad.
              </div>
              <div className="text-md mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                placeat perspiciatis, veritatis reprehenderit ut quidem illo id,
                accusamus omnis aliquam doloremque, hic eaque voluptatum
                deserunt suscipit. Qui molestiae odio obcaecati.
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
