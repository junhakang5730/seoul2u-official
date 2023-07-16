"use client";

import Image from "next/image";
import about_img_01 from "./../public/about_img_01.png";
import ship from "./../public/ship.png";
import plane from "./../public/plane.png";
import styles from "./page.module.scss";
import Button from "@mui/material/Button";
import Landing from "./components/Landing";
import TitleText from "./components/TitleText";

import { Wrapper, Status } from "@googlemaps/react-wrapper";

import {
  GoogleMap,
  useJsApiLoader,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || "";
const { isLoaded } = useJsApiLoader({
  id: "google-map-script",
  googleMapsApiKey,
});

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 37.5575,
  lng: 126.924,
};

export default function Home() {
  return (
    <>
      <Landing />
      <div className="outter">
        {/* ================================================== */}
        {/* About us */}
        {/* ================================================== */}
        <div className={styles.about}>
          <div className={styles.top_area}>
            <div className={styles.img_side}>
              <Image
                src={about_img_01}
                layout="responsive"
                alt="about_img_01"
              />
            </div>
            <div className={styles.text_side}>
              <div className={styles.title}>About us</div>
              <div className={styles.paragraph}>
                best partner for shipping from Korea to Thailand Since 2019 we
                are helping customers with small to big amount of cargo
              </div>
            </div>
          </div>
          <div className={styles.dialog_box}>
            <div className={styles.dialog}>
              <div className={styles.dialog_title}>this is Title</div>
              <div className={styles.dialog_paragraph}>
                best partner for shipping from Korea to Thailand Since 2019 we
                are
              </div>
            </div>
            <div className={styles.dialog}>
              <div className={styles.dialog_title}>this is Title</div>
              <div className={styles.dialog_paragraph}>
                best partner for shipping from Korea to Thailand Since 2019 we
                are
              </div>
            </div>
            <div className={styles.dialog}>
              <div className={styles.dialog_title}>this is Title</div>
              <div className={styles.dialog_paragraph}>
                best partner for shipping from Korea to Thailand Since 2019 we
                are
              </div>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* Shippings */}
        {/* ================================================== */}
        <div className={styles.shippings}>
          <div className={styles.con}>
            <div className={styles.type_card}>
              <div>
                Sea <br />
                20~25 days
              </div>
              <div className={styles.img_con}>
                <img src="ship_2.png" alt="ship" />
              </div>
            </div>
            <div className={styles.type_card}>
              <div>
                Air <br />
                3~5 days
              </div>
              <div className={styles.img_con}>
                <img
                  className={styles.img_plane}
                  src="plane_2.png"
                  alt="ship"
                />
              </div>
            </div>
            <div className={styles.des}>
              <div className={styles.title}>Shipping</div>
              <div className={styles.paragraph2}>
                Sea and Air cargo is provided
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================== */}
      {/* Unpacking Service */}
      {/* ================================================== */}
      <div className={styles.unpacking}>
        <div className={styles.con}>
          <div className={styles.des}>
            <div className={styles.title}>Unpacking Service</div>
            <div className={styles.paragraph2}>
              want to know if your order is correct before ship to thailand no
              problem !
            </div>
            <Button
              className={styles.button}
              variant="contained"
              disableElevation
            >
              Request
            </Button>
          </div>
          <div className={styles.img_side}>
            <img src="unpacking.png" alt="" />
          </div>
        </div>
      </div>

      {/* ================================================== */}
      {/* Pick up Service */}
      {/* ================================================== */}
      <div className={styles.Pickup}>
        <div className={styles.con}>
          <div className={styles.img_side}>
            <img src="pickup_img.png" alt="" />
          </div>
          <div className={styles.des}>
            <div className={styles.title}>Pick up Service</div>
            <div className={styles.paragraph2}>
              want to know if your order is correct before ship to thailand no
              problem !
            </div>
            <Button
              className={styles.button}
              variant="contained"
              disableElevation
            >
              Request
            </Button>
          </div>
        </div>
      </div>

      {/* ================================================== */}
      {/* Proxy Payment */}
      {/* ================================================== */}
      <div className={styles.Proxy}>
        <div className={styles.con}>
          <div className={styles.des}>
            <div className={styles.title}>Proxy Payment</div>
            <div className={styles.paragraph2}>
              want to know if your order is correct before ship to thailand no
              problem !
            </div>
            <Button
              className={styles.button}
              variant="contained"
              disableElevation
            >
              Request
            </Button>
          </div>
          <div className={styles.img_side}>
            <img src="proxy_img.png" alt="" />
          </div>
        </div>
      </div>

      <div className="outter">
        {/* ================================================== */}
        {/* Product */}
        {/* ================================================== */}
        <div className={styles.products}>
          <div className={styles.title}>Our Products</div>
          <div className={styles.product_con}>
            <div className={styles.product_card}>
              <div className={styles.img_con}>
                <img src="product_tracking.png" alt="" />
              </div>
              <div className={styles.card_title}>Tracking Search</div>
              <div className={styles.card_des}>
                you can look up if the parcel is arrived in Korean warehouse or
                departed from Thai warehouse
              </div>
              <Button
                className={styles.button}
                variant="contained"
                disableElevation
              >
                Visit
              </Button>
            </div>
            <div className={styles.product_card}>
              <div className={styles.img_con}>
                <img src="product_app.png" alt="" />
              </div>
              <div className={styles.card_title}>Tracking Search</div>
              <div className={styles.card_des}>
                you can look up if the parcel is arrived in Korean warehouse or
                departed from Thai warehouse
              </div>
              <Button
                className={styles.button}
                variant="contained"
                disableElevation
              >
                Visit
              </Button>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* three points */}
        {/* ================================================== */}
        <div className={styles.threePoints}>
          <div className={styles.box}>
            <div className={styles.icon}></div>
            <div>3,000+</div>
          </div>
          <div className={styles.box}>
            <div className={styles.icon}></div>
            <div>2,000+</div>
          </div>
          <div className={styles.box}>
            <div className={styles.icon}></div>
            <div>5yr</div>
          </div>
        </div>
      </div>

      {/* ================================================== */}
      {/* reviews */}
      {/* ================================================== */}
      <div className={styles.reviews}>
        <div className={styles.title}>Reviews</div>
        <div className={styles.paragraph2}>Our Customers Loves our Service</div>
        <div className={styles.img_con}>
          <img src="reviews.png" alt="" />
        </div>
      </div>

      {/* ================================================== */}
      {/* contact */}
      {/* ================================================== */}
      <div className={styles.contact}>
        <div className={styles.title}>Contact</div>
        <div className={styles.con}>
          <div className={styles.map_side}>
            <img src="contact_map.png" alt="map" />

            <div className={styles.location_contact_con}>
              <div className={styles.location_con}>
                <div className={styles.contact_title}>Location</div>
                <div className={styles.contact_p}>
                  Korea Seoul city Song-pa Disctrict Moon-jung-dong
                </div>
                <div className={styles.contact_p}>
                  (Detail address for membership only)
                </div>
              </div>

              <div className={styles.contact_con}>
                <div className={styles.contact_title}>Contact info</div>
                <div className={styles.contact_p}>010-9619-0178</div>
                <div className={styles.contact_p}>seoul2u.work@gmail.com</div>
              </div>
            </div>
          </div>
          <div className={styles.mail_side}>
            <div className={styles.top_line}>
              <div>
                <div className={styles.mail_title}>name</div>
                <input
                  className={styles.mail_form}
                  type="text"
                  placeholder="name"
                />
              </div>
              <div>
                <div className={styles.mail_title}>email</div>
                <input
                  className={styles.mail_form}
                  type="text"
                  placeholder="email"
                />
              </div>
            </div>
            <div className={styles.second_line}>
              <div className={styles.mail_title}>message</div>
              <textarea
                className={`${styles.mail_form} ${styles.message_form}`}
                placeholder="message"
              />
            </div>
            <Button
              className={styles.button}
              variant="contained"
              disableElevation
            >
              Submit
            </Button>
          </div>
        </div>
      </div>

      {/* ================================================== */}
      {/* footer */}
      {/* ================================================== */}
      <div className={styles.footer}>
        <img src="footer_logo.png" alt="line" />
        <div className={styles.line} />
        <div className={styles.sns}>
          <img src="footer_line.png" alt="line" />
          <img src="footer_insta.png" alt="insta" />
          <img src="footer_facebook.png" alt="facebook" />
        </div>
        <h1>Submit | FAQ | Licence | Support | Contact</h1>
        <h2>ⓒ2023 SeoulConnex All rights reserved. </h2>
      </div>
    </>
  );
}
