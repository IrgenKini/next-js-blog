import React from "react";
import path from "path";
import { promises as fs } from "fs";
import { useRouter } from "next/router";

const Post = ({ fileContents }) => {
  const router = useRouter();
  const { pid, category } = router.query;

  return (
    <div>
      Blog Post NO. {pid} from Category {category}
      <hr />
      {fileContents.title}
      <hr />
      {fileContents.content}
    </div>
  );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");

  const filePath = path.join(postsDirectory, "posts1.json");
  let fileContents = await fs.readFile(filePath, "utf8");
  fileContents = JSON.parse(fileContents);

  return { props: { fileContents } };
}

export default Post;

// export async function getStaticPaths() {
//   const postsDirectory = path.join(process.cwd(), "categories");

//   let categoryPosts = await fs.readFile(
//     path.join(postsDirectory, "category1.json"),
//     "utf8"
//   );

//   categoryPosts = JSON.parse(categoryPosts);

//   const paths = categoryPosts.map((post) => ({
//     params: { pid: post.pid },
//   }));
//   return { paths, fallback: false };
// }

// This also gets called at build time
// export async function getStaticProps({ params }) {
//   const postsDirectory = path.join(process.cwd(), "posts");

//   const filePath = path.join(postsDirectory, "posts" + params.pid + ".json");
//   let fileContents = await fs.readFile(filePath, "utf8");
//   fileContents = JSON.parse(fileContents);

//   // Pass post data to the page via props
//   return { props: { fileContents } };
// }

//for server side rendering

// export async function getServerSideProps(context) {
//   const postsDirectory = path.join(process.cwd(), "posts");

//   const filePath = path.join(postsDirectory, "" + context.params);
//   let fileContents = await fs.readFile(filePath, "utf8");
//   fileContents = JSON.parse(fileContents);

//   return { props: { fileContents } };
// }
