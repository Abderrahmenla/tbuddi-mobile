import React, { memo } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
const BaseApp = React.lazy(() => import("./base-app"))

function AuthenticatedApp() {
    return (
        <React.Suspense fallback={null}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/500'
                        element={
                            <div className='h-screen w-screen flex items-center justify-center flex-col'>
                                <h1 className='text-danger text-2xl'>Something went wrong :(</h1>
                                <Link to='/'>Back to Home</Link>
                            </div>
                        }
                    />
                    <Route path='*' element={<BaseApp />} />
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    )
}

export default memo(AuthenticatedApp)
