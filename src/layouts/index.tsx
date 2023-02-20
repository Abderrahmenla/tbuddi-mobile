import React from "react"
import BottomNavigation from "./navigation/bottom-nav"
import TopNavigation from "./navigation/top-nav"
const Marketplace = React.lazy(() => import("../components/UI/icons/marketplace"))
const Services = React.lazy(() => import("../components/UI/icons/services"))
const Tours = React.lazy(() => import("../components/UI/icons/tours"))
const Profile = React.lazy(() => import("../components/UI/icons/profile"))

export default function Layout({ children }: any) {
    const navLinks = [
        { name: "Marketplace", path: "/register", Icon: Marketplace },
        { name: "Services", path: "/forgot-password", Icon: Services },
        { name: "Tours", path: "/account/reset/finish", Icon: Tours },
        { name: "Profile", path: "/forgot-password", Icon: Profile },
    ]
    return (
        <div className='wrapper'>
            <TopNavigation className='top-nav small' />
            {children}
            <BottomNavigation className='bottom-nav small' navLinks={navLinks} />
        </div>
    )
}
