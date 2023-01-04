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

const getChapterAndVerse = (id: any) => {
  const verseCount = [
    47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 34, 27, 20, 24, 28, 78,
  ];
  let chapter = 0;
  let verse = 0;
  for (let i = 0; i < verseCount.length; i++) {
    if (id > verseCount[i]) {
      id -= verseCount[i];
    } else {
      chapter = i + 1;
      verse = id;
      break;
    }
  }
  return { chapter, verse };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const { id: number } = req.query;
  if (typeof number !== "string" || number === undefined || number === "") {
    res.status(400).json({
      errorCode: 400,
      errorMessage: "Bad Request",
    });
  }
  const { chapter, verse } = getChapterAndVerse(number);

  const checkData = await fetch(
    `https://bhagavadgitaapi.in/slok/${chapter}/${verse}`
  );

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
