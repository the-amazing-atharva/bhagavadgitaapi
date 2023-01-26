// import React, { useState, useRef, TextareaHTMLAttributes } from "react";
// import * as emailjs from "@emailjs/browser";
import Navbar from "../../components/Navbar";
import styles from "../../styles/contact.module.css";
import krishnaPng1 from "../../assets/images/krishnaPicture1.png";
import Image from "next/image";

const contact = () => {
  // const emailRef = useRef<HTMLInputElement>(null);
  // const nameRef = useRef<HTMLInputElement>(null);
  // const messageRef = useRef<>(null);

  // const resetForm = () => {
  //   if (emailRef.current && nameRef.current && messageRef.current) {
  //     emailRef.current.value = "";
  //     nameRef.current.value = "";
  //     messageRef.current.value = "";
  //   }
  // };
  // const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   try {
  //     if (emailRef.current && subjectRef.current && messageRef.current) {
  //       await emailjs.send(
  //         `${process.env.SERVICE_ID}`,
  //         `${process.env.TEMPLATE_ID}`,
  //         {
  //           to: emailRef.current.value,
  //           name: nameRef.current.value,
  //           message: messageRef.current.value,
  //         },
  //         "KiorzUSNq5lRmavZ9"
  //       );
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   resetForm();
  // };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.screen}>
          <div className={styles.screen_header}>
            <div className={styles.redCircle}></div>
            <div className={styles.yellowCircle}></div>
            <div className={styles.greenCircle}></div>
          </div>
          <div className={styles.screen_body}>
            <div className={styles.screen_body_item_left}>
              <div className={styles.image_card}>
                <div className={styles.image}>
                  <Image
                    src={krishnaPng1}
                    className={styles.imageTag}
                    alt="krishna"
                  />
                </div>
              </div>
            </div>
            <div className={styles.screen_body_item_right}>
              <div className={styles.app_content_form}>
                <form className={styles.form}>
                  <h1>Contact Us</h1>
                  <div className={styles.form_group}>
                    <p>
                      <textarea placeholder="Your message" required />
                    </p>
                    <div className={styles.side}>
                      <p>
                        <input type="text" placeholder="Your name" required />
                      </p>
                      <p>
                        <input type="email" placeholder="Your email" required />
                      </p>
                    </div>
                  </div>
                  <div className={styles.app_content_btn_group}>
                    <button type="submit" className={styles.app_content_btn}>
                      Send
                    </button>
                    <button type="reset" className={styles.app_content_btn}>
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
