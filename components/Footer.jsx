import React from "react";
import styles from "../styles/Home.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
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