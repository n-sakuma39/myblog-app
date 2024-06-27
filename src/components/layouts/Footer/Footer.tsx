"use client";
import React from "react";
import { PiArrowLineUp } from "react-icons/pi";
import { animateScroll as scroll } from "react-scroll";
import styles from "@/styles/components/layouts/Footer/Footer.module.scss";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.scrollButton} onClick={scrollToTop}>
        <PiArrowLineUp size={40} />
      </div>
      <div className={styles["inner-box"]}>
        <p className={styles.copyright}>
          &copy; {currentYear} SakuTech All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
