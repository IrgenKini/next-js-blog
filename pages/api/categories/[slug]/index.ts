import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

import { Category } from "..";

const data: Category[] = JSON.parse(
  fs
    .readFileSync(path.resolve(process.cwd(), "data", "categories.json"))
    .toString()
);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category | null>
) {
  const category = data.find((category) => category.slug === req.query.slug);

  if (!category) {
    return res.status(404).send(null);
  }

  res.status(200).json(category);
}
