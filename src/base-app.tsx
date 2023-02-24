import { memo, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { Tabs, TabList, Tab, TabPanel } from "react-tabs"

import Marketplace from "./screens/marketplace"
import Tours from "./screens/tours"
import Services from "./screens/services"

import Header from "./layouts/navigation/header"

import MarketplaceIcon from "./components/UI/icons/marketplace"
import ServicesIcon from "./components/UI/icons/services"
import ToursIcon from "./components/UI/icons/tours"
import ProfileIcon from "./components/UI/icons/profile"

function BaseApp() {
    const [active, setActive] = useState(0)
    const navItems = [
        { Icon: MarketplaceIcon, Screen: Marketplace },
        { Icon: ServicesIcon, Screen: Services },
        { Icon: ToursIcon, Screen: Tours },
        { Icon: ProfileIcon, Screen: () => <Navigate to='/register' /> },
    ]
    useEffect(() => {
        const navPointer = document.querySelector(".bottom-nav .pointer")
        if (navPointer instanceof HTMLSpanElement) {
            const lefPercent = (window.innerWidth / navItems.length) * active
            navPointer.style.left = lefPercent + "px"
        }
    }, [active])
    return (
        <div className='container'>
            <Header className='header' />
            <Tabs selectedIndex={active} onSelect={(index) => setActive(index)}>
                {navItems.map((item, index) => (
                    <TabPanel key={index} selectedClassName='content'>
                        <item.Screen />
                    </TabPanel>
                ))}
                <div className='bottom-nav'>
                    <TabList className='list-items'>
                        <span className='pointer'></span>
                        {navItems.map((link, index) => (
                            <Tab className='item' key={index}>
                                <div className='link'>
                                    <link.Icon fill={`${index === active ? "#ff767d" : "#acb8c1"}`} />
                                </div>
                            </Tab>
                        ))}
                    </TabList>
                </div>
            </Tabs>
        </div>
    )
}

export default memo(BaseApp)
