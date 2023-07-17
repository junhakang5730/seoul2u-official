"use client";

import Link from "next/link";
import styles from "./GNB.module.scss";
import React, { useState } from "react";

import useStore from "./../store";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  switchClasses,
} from "@mui/material";

export default function GNB() {
  const lang = useStore((state) => state.lang);
  const toEng = useStore((state) => state.toEng);
  const toThai = useStore((state) => state.toThai);
  const toKor = useStore((state) => state.toKor);

  // 언어 선택
  const [selectedLang, setSelectedLang] = useState("thai");

  const handleChange = (event) => {
    setSelectedLang(event.target.value);
  };

  return (
    <div className={styles.outter}>
      <div className={styles.background}>
        {/* 왼쪽 */}
        <div className={styles.left}>
          <Link href="#landing">
            <img className={styles.logo} src="logo.png" alt="" />
          </Link>

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
          <FormControl>
            <Select
              labelId="lang-select-label"
              id="lang-select"
              value={selectedLang}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
              onChange={handleChange}
            >
              <MenuItem value="eng" onClick={toEng}>
                🇬🇧 Eng
              </MenuItem>
              <MenuItem value="thai" onClick={toThai}>
                🇹🇭 Thai
              </MenuItem>
              <MenuItem value="kor" onClick={toKor}>
                🇰🇷 Kor
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
