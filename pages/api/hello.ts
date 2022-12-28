// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Data = {
  name: Data;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const gitaPath = path.join(process.cwd(), "assets/gita.json");
  const gita = JSON.parse(fs.readFileSync(gitaPath, "utf-8"));
  res.status(200).json(gita);
}
