import { NextApiRequest, NextApiResponse } from "next";
import getTranslation from "../../assets/json/translation.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getTranslation);
}
