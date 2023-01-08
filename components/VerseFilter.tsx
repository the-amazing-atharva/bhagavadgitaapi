import { useState, useEffect } from "react";
import { data } from "../assets/extra/verse";
import Verse from "./Verse";

const FilterVerse = () => {
  const [chapterNumber, setChapterNumber] = useState(0);
  const [verseNumber, setVerseNumber] = useState(0);
  const [filteredData, setFilteredData] = useState<
    {
      chapter_id: number;
      chapter_number: number;
      externalId: number;
      id: number;
      text: string;
      title: string;
      verse_number: number;
      verse_order: number;
      transliteration: string;
      word_meanings: string;
    }[]
  >([]);

  useEffect(() => {
    setFilteredData(
      data.filter(
        ({ chapter_number, verse_number }) =>
          (chapterNumber === 0 || chapter_number === chapterNumber) &&
          (verseNumber === 0 || verse_number === verseNumber)
      )
    );
  }, [chapterNumber, verseNumber]);

  const chapterOptions = data
    .map((verse) => verse.chapter_number)
    .filter((number, index, array) => array.indexOf(number) === index);

  const verseOptions = data
    .filter((verse) => verse.chapter_number === chapterNumber)
    .map((verse) => verse.verse_number)
    .filter((number, index, array) => array.indexOf(number) === index);

  return (
    <>
      <div className="flex mb-5">
        <div className="mr-5">
          <label className="mr-1 text-lg">Chapter Number:</label>
          <select
            id="chapter-number"
            className="w-20 p-1 text-center rounded-md mr-2 "
            value={chapterNumber}
            onChange={(event) => {
              setChapterNumber(Number(event.target.value));
              setVerseNumber(0);
            }}
          >
            <option key={0} value={0}>
              All
            </option>
            {chapterOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="verse-number">
          <label className="mr-1 text-lg">Verse Number:</label>
          <select
            id="verse-number"
            className="w-20 p-1 text-center rounded-md"
            value={verseNumber}
            onChange={(event) => setVerseNumber(Number(event.target.value))}
          >
            <option key={0} value={0}>
              All
            </option>
            {verseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Verse data={filteredData} />
    </>
  );
};
export default FilterVerse;
