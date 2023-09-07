import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { API_URL } from "../../utils/urls";

interface products {
  data: any;
  meta: any;
}

export default function Home({ products }: { products: products }) {
  console.log(products);

  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* Heading and Paragraph Start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for You Miles
          </div>
          <div>
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running
          </div>
        </div>
        {/* Heading and Paragraph End */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product: any) => (
            <ProductCard key={product.id} data={product} />
          ))}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get(`${API_URL}/api/products?populate=*`);
    return { props: { products: res.data } };
  } catch (err) {
    return { props: { err } };
  }
}
