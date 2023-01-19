import React from 'react'
import css from "./Css.module.css"
export default function Navbar() {
    return (
        <div className={ css.style }>
            <nav className={ css.navbar_center }>
                <ul className={ css.ul }>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                </ul>
            </nav>
            )
    </div>
    )
}
