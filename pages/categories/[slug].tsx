import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import Layout from "../../components/Layout";

import { Category } from "../api/categories";
import { Product } from "../api/products";

interface CategoryProps {
  category: Category;
  products: Product[];
}

const CategoryPage = ({ category, products }) => {
  return (
    <div>
      <Head>
        <title>{category.name}</title>
      </Head>
      <main>
        <h1>{category.name}</h1>
        <h2>{category.description}</h2>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`}>
                  <a>
                    <h3>{product.name}</h3>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products...</p>
        )}
        <Link href="/">
          <a>Back to categories</a>
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
    paths: categories.map((category) => ({ params: { slug: category.slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<CategoryProps> = async (
  context
) => {
  try {
    const category: Category = await (
      await fetch(
        `http://localhost:3000/api/categories/${context.params?.slug}`
      )
    ).json();

    const products: Product[] = await (
      await fetch(
        `http://localhost:3000/api/categories/${context.params?.slug}/products`
      )
    ).json();

    return {
      props: {
        category,
        products,
      },
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Welcome to category page">
      {/* other things can be added here as necessary */}
      {page}
    </Layout>
  );
};

export default CategoryPage;
