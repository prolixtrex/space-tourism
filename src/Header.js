import { useState, useEffect, useRef } from 'react'
import { ReactComponent as Logo } from './shared/logo.svg'
import { Link } from 'react-router-dom'
import "./header.css"

const Header = ({ active }) => {
    const [navActive, setNavActive] = useState("")
    const mobileRef = useRef(null)
    const navRef = useRef(null)
    const styleBorder = {
        borderBottom: "3px solid hsl(0, 0%, 100%)"
    }

    useEffect(() => {
        const bars = mobileRef.current
        const nav = navRef.current

        bars.addEventListener('click', () => {
            setNavActive(() => !navActive ? 'active' : "")
        })

        nav.addEventListener('click', () => {
            setNavActive("")
        })
        return () => {
            bars.removeEventListener('click', () => {
                setNavActive(() => !navActive ? 'active' : "")
            })
            nav.removeEventListener('click', () => {
                setNavActive("")
            })
        }
    }, [navActive])

    return (
        <header className='header'>
            <nav className={`nav ${navActive}`}>
                <div className='logo'>
                    <Link to={`/`}><Logo /></Link>
                </div>
                <div className='line'></div>
                <div className='nav-links'>
                    <ul ref={navRef}>
                        <li className='nav-text' style={active === "home" ? styleBorder : {}}><span>00</span><Link to={`/`}>HOME</Link></li>
                        <li className='nav-text' style={active === "destination" ? styleBorder : {}}><span>01</span><Link to={`/destination`}>DESTINATION</Link></li>
                        <li className='nav-text' style={active === "crew" ? styleBorder : {}}><span>02</span><Link to={`/crew`}>CREW</Link></li>
                        <li className='nav-text' style={active === "technology" ? styleBorder : {}}><span>03</span><Link to={`/technology`}>TECHNOLOGY</Link></li>
                    </ul>
                </div>
                <div className='mobile-nav' ref={mobileRef}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
            </nav>
        </header>
    )
}

export default Header