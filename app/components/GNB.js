"use client";

import React from "react";
import styles from "./GNB.module.scss";
import S2U_Logo from "./../../public/s2u-logo.svg";

import Button from "@mui/material/Button";

export default function GNB() {
  return (
    <div className={styles.outter}>
      <div className={styles.background}>
        {/* 왼쪽 */}
        <div className={styles.left}>
          {/* <S2U_Logo className={styles.logo} /> */}
          <a href="">
            <img className={styles.logo} src="logo.png" alt="" />
          </a>
          <Button
            className={styles.menu_btn}
            disableRipple
            variant="text"
            size="large"
          >
            About
          </Button>

          <Button
            className={styles.menu_btn}
            disableRipple
            variant="text"
            size="large"
          >
            Service & Price
          </Button>

          <Button
            className={styles.menu_btn}
            disableRipple
            variant="text"
            size="large"
          >
            Contact
          </Button>
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
