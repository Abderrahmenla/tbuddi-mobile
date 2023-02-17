import { memo, lazy } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

const ResetPassword = lazy(() => import("./pages/account/password-reset"))
const ForgetPassword = lazy(() => import("./pages/account/forget-password"))
const Login = lazy(() => import("./pages/account/login"))
const Register = lazy(() => import("./pages/account/register"))

function UnAuthenticatedApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/account/reset/finish' element={<ResetPassword />} />
                <Route path='/forgot-password' element={<ForgetPassword />} />
                <Route path='*' element={ <Navigate to='/login' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default memo(UnAuthenticatedApp)