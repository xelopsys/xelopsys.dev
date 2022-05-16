import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import ButtonMenu from "./Button";
import Script from "next/script";

export default function Header() {
	return (
		<header>
			{/* Google tag manager */}

			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=UA-213502733-1`}
			/>

			<Script strategy="lazyOnload">
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-213502733-1', {
              page_path: window.location.pathname,
            });
                `}
			</Script>

			{/* Head  */}
			<Head>
				<link rel="shortcut icon" href="icon.ico" type="image/x-icon" />
				<script
					src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
					integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
					crossOrigin="anonymous"
				/>
				<script
					src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
					integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
					crossOrigin="anonymous"
				/>
				<script
					src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
					integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
					crossOrigin="anonymous"
				/>
			</Head>
			<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg position-sticky sticky-top">
				<div className=" mr-auto">
					<Link href="/">
						<img
							src="/xelop.ico"
							className={styles.logo1}
							alt=""
							title="xelopsys"
							id="img"
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
