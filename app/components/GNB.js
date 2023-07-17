"use client";

import Link from "next/link";
import React from "react";
import styles from "./GNB.module.scss";

import Button from "@mui/material/Button";

export default function GNB() {
  return (
    <div className={styles.outter}>
      <div className={styles.background}>
        {/* 왼쪽 */}
        <div className={styles.left}>
          <a href="">
            <img className={styles.logo} src="logo.png" alt="" />
          </a>
          <Link className={styles.menu_btn} href="#about">
            About
          </Link>

          <Link className={styles.menu_btn} disableRipple href="#service">
            Services
          </Link>

          <Link className={styles.menu_btn} href="#contact">
            Contact
          </Link>
        </div>

        {/* 오른쪽 */}
        <div className={styles.right}>
          <div className={styles.pc}>🇬🇧eng</div>
          <div className={styles.mobile}> 🍔</div>
        </div>
      </div>
    </div>
  );
}
