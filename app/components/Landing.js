import React from "react";

import Image from "next/image";
import landing_img from "./../../public/landing_img.png";
import Button from "@mui/material/Button";
import styles from "./Landing.module.scss";

export default function Landing() {
  return (
    <div className={styles.background}>
      <div className={styles.text_box}>
        <p className={styles.text}>
          Your Best <br /> Shipping Partner
        </p>
      </div>
      <Button className={styles.button} variant="contained" disableElevation>
        see more
      </Button>
    </div>
  );
}
