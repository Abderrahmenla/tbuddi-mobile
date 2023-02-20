import React from "react"
import { useState, useEffect } from "react"

interface RFCProps {
    fill: string
}

interface Props {
    navLinks: Array<{
        path: string
        Icon: React.FC<RFCProps>
        name: string
    }>
    className?: string
}

import { Link } from "react-router-dom"
export default function BottomNavigation({ navLinks, className }: Props) {
    const [active, setActive] = useState(1)
    useEffect(() => {
        const navigation_pointer = document.querySelector(".bottom-nav .pointer")
        if (navigation_pointer instanceof HTMLSpanElement) {
            const lefPercent = (window.innerWidth / navLinks.length) * (active - 1)
            navigation_pointer.style.left = lefPercent + "px"
        }
    }, [active])
    return (
        <nav className={className}>
            <ul className='list-items'>
                <span className='pointer'></span>
                {navLinks.map((link, index) => (
                    <li className={`item ${index + 1 === active ? "active" : ""}`} key={index}>
                        <Link 
                            onClick={() => {
                                setActive(index + 1)
                            }}
                            className='link'
                            to={link.path}
                        >
                            <link.Icon fill={`${index + 1 === active ? "#ff767d" : "#acb8c1"}`} />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
