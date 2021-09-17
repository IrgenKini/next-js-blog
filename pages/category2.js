import Link from "next/link";

export default function Category2() {
  return (
    <div>
      Hello Category 2
      <ol>
        <li>
          <Link
            href={{
              pathname: "/post",
              query: { pid: 1, category: 2 },
            }}
          >
            Post 1
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/post",
              query: { pid: 2, category: 2 },
            }}
          >
            Post 2
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/post",
              query: { pid: 3, category: 2 },
            }}
          >
            Post 3
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/post",
              query: { pid: 4, category: 2 },
            }}
          >
            Post 4
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/post",
              query: { pid: 5, category: 2 },
            }}
          >
            Post 5
          </Link>
        </li>
      </ol>
    </div>
  );
}
