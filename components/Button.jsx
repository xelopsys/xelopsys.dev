import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import Link from "next/link"
import styles from "../styles/Home.module.css"
import { useRouter } from 'next/router'
// import Link from "./link/index.js"
import { async } from '../pages/[slug]';

export default function SimpleMenu() {
    // const router = useRouter()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={styles.MenuButton}>
                Menu
            </Button>
            <Menu

                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}

            >
                <Link href="/" passHref>
                    <MenuItem className={styles.menu} onClick={handleClose}>Home</MenuItem>
                </Link>
                <Link href="/about" passHref>
                    <MenuItem className={styles.menu} onClick={handleClose}>About</MenuItem>
                </Link>
                <Link href="/projects" passHref>
                    <MenuItem className={styles.menu} onClick={handleClose}>Projects</MenuItem>
                </Link>

                <Link href="/blog" passHref>
                    <MenuItem className={styles.menu} onClick={handleClose}>Blog</MenuItem>

                </Link>

                <Link href="/socials" passHref>
                    <MenuItem className={styles.menu} onClick={handleClose}>Socials</MenuItem>
                </Link>

            </Menu>
        </div>
    );
}
