import Link from "next/link";
import React from "react";
import styles from "../styles/navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.companyName}>
          <h1>My Company</h1>
        </div>
        <div className={styles.navbarLinks}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/about">
            About
          </Link>
          <Link className={styles.link} href="/services">
            Services
          </Link>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
          <Link className={styles.link} href="/login">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// <NavbarContainer>
//   <CompanyName>My Company</CompanyName>
//   <NavbarLinks>
//     <Link href="/">Home</Link>
//     <Link href="/about">About</Link>
//     <Link href="/services">Services</Link>
//     <Link href="/contact">Contact</Link>
//   </NavbarLinks>
// </NavbarContainer>
