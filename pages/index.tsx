import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Category } from "./api/categories";

interface HomeProps {
  categories: Category[];
}

const Home: NextPage<HomeProps> = ({ categories }) => {
  return (
    <div className="container">
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
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
};

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

export default Home;
