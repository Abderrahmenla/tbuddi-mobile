import React, { memo } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
const Profile = React.lazy(() => import("./pages/profile"))
const BaseApp = React.lazy(() => import("./base-app"))

function AuthenticatedApp() {
    return (
        <React.Suspense fallback={null}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<BaseApp />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route
                        path='/500'
                        element={
                            <div className='h-screen w-screen flex items-center justify-center flex-col'>
                                <h1 className='text-danger text-2xl'>Something went wrong :(</h1>
                                <Link to='/'>Back to Home</Link>
                            </div>
                        }
                    />
                    <Route
                        path='*'
                        element={
                            <div className='h-screen w-screen flex items-center justify-center flex-col'>
                                <h1 className='text-danger text-2xl'>404 Page not found</h1>
                                <Link to='/'>Back to Home</Link>
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    )
}

export default memo(AuthenticatedApp)
