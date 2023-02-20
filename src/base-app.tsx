import React, { memo } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Home = React.lazy(() => import("./pages/home"))

function BaseApp() {
    return (
        <div className='large'>
            <React.Suspense fallback={null}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </React.Suspense>
        </div>
    )
}

export default memo(BaseApp)
