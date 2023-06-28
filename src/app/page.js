"use client";

import Image from 'next/image'

import styles from './page.module.scss'
// import "./App.css";
import { useState,useEffect } from 'react';
import logo from "./images/Logo2.svg";
import palm from "./images/Palm.svg";
import arrow from "./images/arrow white and red.svg"
import arrowWhite from "./images/arrow white and white.svg"
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export default function Home() {
  const [hoverLeft, setHoverLeft] = useState(false)
const [hoverRight, setHoverRight] = useState(false)
useEffect(() => {
  // console.log(hoverLeft);
}, [hoverLeft,hoverRight])

return (
  <div className={`${styles.App}`}>
    
    <center>
      <Image style={{marginTop:"25px",maxWidth:"90px",maxHeight:"80px"}} src={logo} />
    </center>
    <h1 className={`${styles.h1}`}>
      SCULPTING A NEW OASIS <br />
      AMIDST THE SANDS OF PROGRESS
    </h1>
    <center>
      <div className={`${styles.main}`}>
        <div
          className={`${styles.box} ${styles.left}`}
          
          onMouseEnter={()=>setHoverLeft(true)} onMouseLeave={()=>setHoverLeft(false)}
        >
          <Image src={!hoverLeft ? arrow:arrowWhite}  className={`${styles.innerCircle} ${styles.leftIcon}`}  />
          {/* <AiOutlineRightCircle size={40}  /> */}
          <div className={`${styles.subDiv} ${styles.bottom_left}`}>
     
            <p>FOR THE FULL WEBSITE VISIT OUR</p>
            <h4>BETA VERSION</h4>
          </div>
        </div>
        <center>
          <Image className={`${styles.overlay_image}`} src={palm} alt="" />
        </center>
        <div
          className={`${styles.box} ${styles.right}`}
          
          onMouseEnter={()=>setHoverRight(true)} onMouseLeave={()=>setHoverRight(false)}
        >
          <Image src={!hoverRight ? arrow:arrowWhite} className={`${styles.innerCircle} ${styles.rightIcon}`} />
           {/* <AiOutlineRightCircle className="innerCircle rightIcon" size={40}  /> */}
          <div className={`${styles.subDiv} ${styles.bottom_right}`}>
            <p>MINT NFTS WITH NO CODE ON OUR</p>
            <h4>CREATOR STUDIO</h4>
          </div>
        </div>
      </div>
    </center>

    <footer>
      <center>
        <div className={`${styles.footer}`}>
          JOIN THE OASIS
        </div>
      </center>
      <div
              className={`${styles.socials}`}
              style={{ marginBottom: '20px' }}
            >
              <div
                className={`${styles.socials_circle}`}
                onClick={() =>
                  window.open('https://twitter.com/oasisx_world', '_blank')
                }
              >
                <FaTwitter size={20}  />
              </div>
              <div
                className={`${styles.socials_circle}`}
                onClick={() =>
                  window.open('https://instagram.com/oasisx.world', '_blank')
                }
                style={{ marginLeft: '20px' }}
              >
                <FaInstagram size={24}  />
              </div>
              <div
                className={`${styles.socials_circle}`}
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/company/oasisx',
                    '_blank',
                  )
                }
                style={{ marginLeft: '20px' }}
              >
                < FaLinkedin size={24}  />
              </div>
            </div>
    </footer>
  </div>
);
}
