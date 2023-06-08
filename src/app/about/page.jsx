import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/9362758/pexels-photo-9362758.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Something Title</h1>
          <h2 className={styles.imgDesc}>Lorem ipsum dolor sit amet.</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            quibusdam ipsam, deserunt odit animi, atque amet cupiditate quam. Expedita est porro earum quo ipsum hic
            in quaerat, 
            <br />
            <br /> vitae consequatur quis veritatis voluptatum facere
            accusantium qui. atque amet cupiditate quam. Expedita est porro earum quo ipsum hic
            in quaerat, vitae consequatur quis veritatis voluptatum facere
            accusantium qui. ab alias nobis non excepturi
            <br />
            <br />
            atque amet cupiditate quam. Expedita est porro earum quo ipsum hic
            in quaerat, vitae consequatur quis veritatis voluptatum facere
            accusantium qui.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            aperiam blanditiis voluptatem nulla obcaecati quisquam recusandae
            rem vitae! Dolore perspiciatis, dolor repellendus
            <br />
            <br />
            -deserunt commodi
            <br />
            <br />
            -exercitationem nam qui
            <br />
            <br />
             -provident molestiae! Sequi.
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
