import React from "react";
import Link from "next/link";
import styles from "../../styles/verse.module.css";
import Navbar from "../../components/Navbar";

const index = () => {
  const [verseNumber, setVerseNumber] = React.useState(1);
  const [verse, setVerse] = React.useState(1);
  const [chapter, setChapter] = React.useState(1);
  const [chaptherName, setChapterName] = React.useState("Arjuna Visada Yoga");
  const [shlok, setShlok] = React.useState(
    "धृतराष्ट्र उवाच |\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||१-१||"
  );

  const [pronc, setPronc] = React.useState(
    "dhṛtarāṣṭra uvāca .\ndharmakṣetre kurukṣetre samavetā yuyutsavaḥ .\nmāmakāḥ pāṇḍavāścaiva kimakurvata sañjaya ||1-1||"
  );

  const [shlokMeaning, setShlokMeaning] = React.useState(
    "1.1. Dhrtarastra said  O Sanjaya, what did my sons (and others) and Pandu's sons (and others) actually do when, eager for battle, they assembled on the sacred field, the Kuruksetra (Field of the Kurus)?"
  );

  const getVerse = async () => {
    await fetch(`/api/shlok?id=${verseNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setVerse(data.verseNumber);
        setChapter(data.chapterNumber);
        setChapterName(data.chapterName);
        setShlok(data.shlok);
        setPronc(data.transliteration);
        setShlokMeaning(data.meaning);
      })
      .catch((err) => {
        alert(
          "Something went wrong...\nCheck console for more info and please report this issue on github using the link in the footer or contact page."
        );
        console.log(err);
      });
  };

  const nextShlok = async () => {
    if (verseNumber <= 700) {
      setVerseNumber(verseNumber + 1);
      getVerse();
    } else {
      alert("No more shlokas");
    }
  };
  const prevShlok = async () => {
    if (verseNumber > 0) {
      setVerseNumber(verseNumber - 1);
      getVerse();
    } else {
      alert("No more shlokas");
    }
  };
  const randomShlok = () => {
    const randomVerse = Math.floor(Math.random() * 700) + 1;
    setVerseNumber(randomVerse);
    getVerse();
  };

  return (
    <>
      <Navbar />
      <div className={`${styles.home_container} ${styles.container}`}>
        <div className={styles.container_box}>
          <div className={styles.contentBox}>
            <h1 className={styles.shlok}>{shlok}</h1>
            <p className={styles.pronc}>{pronc}</p>
            <h2 className={styles.shlokMeaning}>{shlokMeaning}</h2>

            <code>{`|| ${chaptherName} | Chapter: ${chapter}, Shlok: ${verse} ||`}</code>
          </div>
          <div className={styles.buttonBox}>
            <Link className={styles.btn} onClick={prevShlok} href="#">
              Previous Shlok
            </Link>
            <Link className={styles.btn} onClick={randomShlok} href="#">
              Random
            </Link>
            <Link className={styles.btn} onClick={nextShlok} href="#">
              Next Shlok
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
