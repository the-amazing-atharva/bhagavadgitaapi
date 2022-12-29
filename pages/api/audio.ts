import { NextApiRequest, NextApiResponse } from "next";
import { createReadStream } from "fs";
import { join } from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // take chapter and verse from query
  const { chapter, verse } = req.query;

  // get audio file from server
  const audiourl = `https://github.com/losier/bhagavadgitaapi/blob/master/assets/audio/${chapter}/${verse}.mp3?raw=true`;

  // get audio from the assets folder
  const audioPath = `../../assets/audio/${chapter}/${verse}.mp3`;

  // return audio file;
  res.status(200).json({ audiourl });
}
