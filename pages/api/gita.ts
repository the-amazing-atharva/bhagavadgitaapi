import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const gitaPath = path.join(process.cwd(), "assets/json/gita.json");
  const gita = JSON.parse(fs.readFileSync(gitaPath, "utf-8"));
  res.status(200).json(gita);
}
