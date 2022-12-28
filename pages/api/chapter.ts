import { NextApiRequest, NextApiResponse } from "next";
import getChapter from "../../assets/chapter.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getChapter);
}
