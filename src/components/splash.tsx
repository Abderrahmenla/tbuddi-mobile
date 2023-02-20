import { useEffect } from "react"
import logo from "../assets/logo.png"
import { SplashComponentProps } from "./models"

export default function Splash(props: SplashComponentProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            props.setShowSplash(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div className='loading'>
            <img src={logo} alt='Logo' className='logo_splash' />
        </div>
    )
}