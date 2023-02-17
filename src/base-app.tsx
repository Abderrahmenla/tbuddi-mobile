import React, { memo } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Sidebar, Navbar } from "./layout"

const Home = React.lazy(() => import("./pages/home"))

function BaseApp() {
    return (
        <div className='mx-auto flex'>
            <Sidebar />
            <div className='w-full'>
                <Navbar />
                <div className='px-6 py-4'>
                    <React.Suspense fallback={null}>
                        <BrowserRouter>
                            <Routes>
                                <Route element={<Home />} />
                            </Routes>
                        </BrowserRouter>
                    </React.Suspense>
                </div>
            </div>
        </div>
    )
}

export default memo(BaseApp)
