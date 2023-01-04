import { NextApiRequest, NextApiResponse } from "next";
interface Data {
  verseNumber: number;
  chapterNumber: number;
  shlok: string;
  meaning: string;
  transliteration: string;
}

interface Error {
  errorCode: number;
  errorMessage: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const { id } = req.query;
  const [ch, sl] = id.split("-"); // will complete soon

  const checkData = await fetch(`https://bhagavadgitaapi.in/slok/${ch}/${sl}`);

  if (checkData.status === 404) {
    res.status(404).json({
      errorCode: 404,
      errorMessage: "Not Found",
    });
  } else {
    const fetchedData = await checkData.json();
    res.status(200).json({
      verseNumber: fetchedData.verse,
      chapterNumber: fetchedData.chapter,
      shlok: `${fetchedData.slok}`,
      meaning: `${fetchedData.gambir.et}`,
      transliteration: `${fetchedData.transliteration}`,
    });
  }
}
