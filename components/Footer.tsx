import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/losier">
        <code className={styles.copyright}>&copy;losier</code>
      </Link>
    </footer>
  );
};

export default Footer;
