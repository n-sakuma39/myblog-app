"use client";
import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import styles from "@/styles/components/layouts/Header/Header.module.scss";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      {isMenuOpen && <div className={styles.mask} onClick={toggleMenu}></div>}
      <div className={styles["inner-box"]}>
        <h1 className={styles.logo}>
          <Link href="/" onClick={() => isMenuOpen && toggleMenu()}>
            SakuTech <span>blog</span>
          </Link>
        </h1>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`${styles.gnavi} ${isMenuOpen ? styles.isOpen : ""}`}>
          <ul>
            <li>
              <Link href="/" onClick={toggleMenu}>
                TOP
              </Link>
            </li>
            <li>
              <Link href="/article" onClick={toggleMenu}>
                BLOG
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
