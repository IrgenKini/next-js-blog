import Head from "next/head";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <h1>{title}</h1>
        <main>{children}</main>
      </nav>
    </div>
  );
}
