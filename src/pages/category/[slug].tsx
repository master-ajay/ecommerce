import React from "react";
import Wrapper from "../../components/Wrapper";
import ProductCard from "../../components/ProductCard";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { API_URL } from "../../../utils/urls";
import axios from "../../../utils/axios";

const Category = ({ category, products, slug }: any) => {
  return (
    <Wrapper>
      <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          Running Shoes
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {products?.data?.map((product: any) => (
          <ProductCard key={product?.id} data={product} />
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
  );
};

export default Category;

type params = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const category = await axios.get(`${API_URL}/api/categories?populate=*`);

  console.log(category, "hhhh");

  const paths = category.data.data.map((c: any) => ({
    params: {
      slug: c.attributes.slug,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const category = await axios.get(
    `${API_URL}/api/categories?filters[slug][$eq]=${slug}`
  );
  const products = await axios.get(
    `${API_URL}/api/products?populate=*&[filters][categories][slug][$eq]=${slug}`
  );
  return { props: { category: category.data, products: products.data, slug } };
};
