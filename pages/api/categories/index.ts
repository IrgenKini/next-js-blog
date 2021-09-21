import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export interface Category {
  description: string;
  name: string;
  slug: string;
}

const data: Category[] = JSON.parse(
  fs
    .readFileSync(path.resolve(process.cwd(), "data", "categories.json"))
    .toString()
);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
) {
  res.status(200).json(data);
}
