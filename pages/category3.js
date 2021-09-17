import Link from "next/link";

export default function Category3() {
  return (
    <div>
      Hello Category 3
      <ol>
        <li>
          <Link
            href={{
              pathname: "/post",
              query: { pid: 1, category: 3 },
            }}
          >
            Post 1
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/post",
              query: { pid: 2, category: 3 },
            }}
          >
            Post 2
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/post",
              query: { pid: 3, category: 3 },
            }}
          >
            Post 3
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/post",
              query: { pid: 4, category: 3 },
            }}
          >
            Post 4
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/post",
              query: { pid: 5, category: 3 },
            }}
          >
            Post 5
          </Link>
        </li>
      </ol>
    </div>
  );
}
