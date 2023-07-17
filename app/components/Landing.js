import React from "react";

import Image from "next/image";
import landing_img from "./../../public/landing_img.png";
import Button from "@mui/material/Button";
import styles from "./Landing.module.scss";

export default function Landing() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const pcStyle = {
    display: "inline-flex",
    padding: "20px 26px",
    marginTop: "3vw",
    marginLeft: "60px",
    alignItems: "flex-start",
    background: "#ff547d",
    borderRadius: "9999px",
    zIndex: "2",
  };

  const mobileStyle = {
    display: "inline-flex",
    padding: "16px 24px",
    marginTop: "8vw",
    marginLeft: "30px",
    alignItems: "flex-start",
    background: "#ff547d",
    borderRadius: "9999px",
    zIndex: "2",
  };

  return (
    <div className={styles.background}>
      <div className={styles.text_box}>
        <p className={styles.text}>
          Your Best <br /> Shipping Partner
        </p>
      </div>
      <Button
        className={styles.button}
        variant="contained"
        disableElevation
        style={isMobile ? mobileStyle : pcStyle}
      >
        see more
      </Button>
    </div>
  );
}
