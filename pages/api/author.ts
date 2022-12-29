import { NextApiRequest, NextApiResponse } from "next";
import getAuthor from "../../assets/json/author.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getAuthor);
}
