// import path from "path";
// import { promises as fs } from "fs";

// export async function getPostInfoById(id) {
//   const postsDirectory = path.join(process.cwd(), "posts");

//   const filePath = path.join(postsDirectory, "posts" + id + ".json");
//   let fileContents = await fs.readFile(filePath, "utf8");
//   fileContents = JSON.parse(fileContents);

//   return { props: { fileContents } };
// }
