import { NextApiRequest, NextApiResponse } from "next";
import getVerse from "../../assets/json/verse.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getVerse);
}
