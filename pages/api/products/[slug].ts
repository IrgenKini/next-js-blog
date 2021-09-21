import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

import { Product } from ".";

const data: Product[] = JSON.parse(
  fs
    .readFileSync(path.resolve(process.cwd(), "data", "products.json"))
    .toString()
);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | null>
) {
  const product = data.find((product) => product.slug === req.query.slug);
  if (!product) return res.status(404).send(null);

  return res.status(200).send(product);
}
