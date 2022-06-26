import React from 'react'
import "./ScrollToTop.css"
import { IoMdRocket } from "react-icons/io";
import { useEffect, useState } from 'react';


const ScrollToTop = ({ sectionRef }) => {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        document.querySelector(".sections").addEventListener("scroll", () => {
            const scrollY = document.querySelector(".sections").scrollTop
            if (scrollY >= 600) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
        });
        return () => {
            document.querySelector(".sections").removeEventListener("scroll");
        };
    }, []);

    const handleScrollTop = () => {
        document.querySelector(".sections").scrollTo(0, 0)
    }
    return (
        <div className={scroll ? "scroll_to_top active" : "scroll_to_top"}>
            <IoMdRocket onClick={handleScrollTop} />
        </div>
    )
}

export default ScrollToTop