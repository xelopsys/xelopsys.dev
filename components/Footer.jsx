import React from "react";
import styles from "../styles/Home.module.css";

export default function Footer({ style }) {
    return (
        <footer className={styles.footer} style={style ? { position: "sticky" } : { position: "relative" }}>
            <p className="text disabled">
                Copyright ©2020 || All rights reserved by Jamshid Jurakulov<br />{" "}


            </p>
            <style jsx>{`
                ::selection{
                    color: #8d0f0f;
                    background-color: black;
                }
      `}</style>
        </footer>
    );
}