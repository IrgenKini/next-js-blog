import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Category } from "../api/categories";
import { Product } from "../api/products";

interface ProductProps {
  category: Category;
  product: Product;
}

const ProductPage: NextPage<ProductProps> = ({ category, product }) => {
  return (
    <div>
      <Head>
        <title>{product.name}</title>
      </Head>

      <main>
        <h1>{product.name}</h1>
        <Link href={`/categories/${category.slug}`}>
          <a>Get back to products</a>
        </Link>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories: Category[] = await (
    await fetch("http://localhost:3000/api/categories")
  ).json();

  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const product: Product = await (
      await fetch(`http://localhost:3000/api/products/${context.params?.slug}`)
    ).json();
    const category: Category = await (
      await fetch(`http://localhost:3000/api/categories/${product.category}`)
    ).json();

    return {
      props: {
        category,
        product,
      },
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default ProductPage;
