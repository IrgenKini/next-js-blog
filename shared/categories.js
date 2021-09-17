// import path from "path";
// import { promises as fs } from "fs";

// export async function getPostsForCategories(categoryName) {
//   const postsDirectory = path.join(process.cwd(), "categories");

//   const filePath = path.join(
//     postsDirectory,
//     "category" + categoryName + ".json"
//   );
//   let categoryPosts = await fs.readFile(filePath, "utf8");
//   categoryPosts = JSON.parse(categoryPosts);

//   return { props: { categoryPosts } };
// }
