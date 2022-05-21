import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import ButtonMenu from "./Button";
// import Script from "next/script";

export default function Header() {
	return (
		<header>

			{/* Head  */}
			<Head>
				<link rel="shortcut icon" href="icon.ico" type="image/x-icon" />
			</Head>
			<nav className="navbar navbar-expand-lg">
				<div className=" mr-auto">
					<Link href="/" passHref>
						<img
							src="/profile.png"
							className={styles.logo1}
							alt=""
							title="xelopsys"
							id="img"
							style={{ borderRadius: "50%" }}
						/>
					</Link>
				</div>

				{/*<button*/}
				{/*    className="navbar-toggler"*/}
				{/*    type="button"*/}
				{/*    data-toggle="collapse"*/}
				{/*    data-target="#navbarText"*/}
				{/*    aria-controls="navbarText"*/}
				{/*    aria-expanded="false"*/}
				{/*    aria-label="Toggle navigation"*/}
				{/*>*/}
				{/*    <span className="navbar-toggler-icon"/>*/}
				{/*</button>*/}
				{/*<div*/}
				{/*    className="collapse navbar-collapse justify justify-content-center"*/}
				{/*    id="navbarText"*/}
				{/*>*/}
				{/*<ul className="navbar-nav">*/}
				{/*    <li className="nav-item active mx-3">*/}
				{/*        <Link href="/">*/}
				{/*            <a className="nav-link">Home</a>*/}
				{/*        </Link>*/}
				{/*    </li>*/}
				{/*    <li className="nav-item mx-3">*/}
				{/*        <Link href="about">*/}
				{/*            <a className="nav-link">About me</a>*/}
				{/*        </Link>*/}
				{/*    </li>*/}

				{/*    <li className="nav-item mx-3">*/}
				{/*        <Link href="projects">*/}
				{/*            <a className="nav-link">Projects</a>*/}
				{/*        </Link>*/}
				{/*    </li>*/}
				{/*</ul>*/}

				{/*</div>*/}
				<div className=" ml-auto">
					<ButtonMenu />

				</div>
			</nav>
			<style jsx>{`
				::selection {
					color: #8d0f0f;
					background-color: black;
				}
			`}</style>
		</header>
	);
}
