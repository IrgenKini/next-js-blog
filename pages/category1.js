import Link from "next/link";

export default function Category1({ categoryPosts }) {
  return (
    <div>
      Hello Category 1
      {/* <ol>
        {categoryPosts.map((post) => {
          return (
            <li>
              <Link
                href={{
                  pathname: "/post",
                  query: { pid: post.pid },
                }}
              >
                {"Post " + post.pid}
              </Link>
            </li>
          );
        })}
      </ol> */}
      <ol>
        <li>
          <Link
            href={{
              pathname: "/post",
              query: { pid: 1, category: 1 },
            }}
          >
            Post 1
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/post",
              query: { pid: 2, category: 1 },
            }}
          >
            Post 2
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/post",
              query: { pid: 3, category: 1 },
            }}
          >
            Post 3
          </Link>
        </li>
      </ol>
    </div>
  );
}

// export async function getStaticProps() {
//   const postsDirectory = path.join(process.cwd(), "categories");

//   const filePath = path.join(postsDirectory, "category1.json");
//   let categoryPosts = await fs.readFile(filePath, "utf8");
//   categoryPosts = JSON.parse(categoryPosts);

//   return { props: { categoryPosts } };
// }
