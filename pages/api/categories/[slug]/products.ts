import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

import { Product } from "../../products";

const data: Product[] = JSON.parse(
  fs
    .readFileSync(path.resolve(process.cwd(), "data", "products.json"))
    .toString()
);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const products = data.filter(
    (product) => product.category === req.query.slug
  );

  return res.status(200).send(products);
}
