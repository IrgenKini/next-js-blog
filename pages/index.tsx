import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Category } from "./api/categories";
import type { ReactElement, ReactNode } from "react";
import Layout from "../components/Layout";

export default function Home({ categories }) {
  return (
    <div className="container">
      <main>
        {categories.length > 0 ? (
          <ul>
            {categories.map((category) => (
              <div>
                <li key={category.slug}>
                  <Link href={`/categories/${category.slug}`}>
                    <a>
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                    </a>
                  </Link>
                </li>

                <br />
              </div>
            ))}
          </ul>
        ) : (
          <p>No categories...</p>
        )}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const categories = await (
    await fetch("http://localhost:3000/api/categories")
  ).json();

  return {
    props: {
      categories,
    },
    revalidate: 60,
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Welcome to Index">{page}</Layout>;
};
