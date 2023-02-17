import React from "react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { useLazyGetAccountQuery } from "./api/tbuddiApi"
import { setUser } from "./store"
import config from "./config"
import Splash from "./components/splash"
import { SplashState } from "./components/models"
import useWindowSize from "./hooks/use-window-size"

const AuthenticatedApp = React.lazy(() => import("./authenticated-app"))
const UnAuthenticatedApp = React.lazy(() => import("./unauthenticated-app"))

// Google Translate SDK
const addScript = document.createElement("script")
addScript.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit")
;(window as any).googleTranslateElementInit = () => {
    ;(window as any).translateElement = new (window as any).google.translate.TranslateElement(
        {
            pageLanguage: "en",
            layout: (window as any).google.translate.TranslateElement.FloatPosition.TOP_LEFT,
        },
        "google-translate-element",
    )
}

document.body.appendChild(addScript)

function App() {
    const dispatch = useDispatch()

    const [getAccount] = useLazyGetAccountQuery()
    const [showSplash, setShowSplash] = useState<SplashState>(true)
    const size = useWindowSize()

    useEffect(() => {
        const getUser = async () => {
            const token = localStorage.getItem(config.LOCAL_STORAGE_TOKEN_KEY)
            if (token && token.length) {
                const result = await getAccount()
                dispatch(setUser(result!.data!))
            }
        }
        getUser()
    }, [])

    if (size?.width > 768) {
        return (
            <div className='mobile'>
                <h1>Mobile version is the only supported screen</h1>
            </div>
        )
    } else {
        if (showSplash) {
            return <Splash setShowSplash={setShowSplash} />
        }
        return (
            <React.Suspense fallback={null}>
                {localStorage.getItem(config.LOCAL_STORAGE_TOKEN_KEY) ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
            </React.Suspense>
        )
    }
}

export default App
