import TextField from "../../components/form/TextField"
import { useState } from "react"
import PasswordField from "../../components/form/PasswordField"
import { useAuthenticateMutation } from "../../api/auth/api"
import { Link, Navigate } from "react-router-dom"
import validation, { setField } from "~/util/validation"
import MainCTA from "~/components/form/MainCTA"
import FormCol from "~/components/form/FormCol"

function Login() {
    const [authenticate, authenticationResult] = useAuthenticateMutation()
    const [form, setform] = useState({
        isValid: false,
        email: {
            value: "",
            isValid: false,
            errorMessage: undefined,
            validators: [validation.required, validation.isEmail],
        },
        password: {
            value: "",
            isValid: false,
            errorMessage: undefined,
            validators: [validation.required, validation.minLength(3)],
        },
    })

    const set = (key: string, value: any) => setField(key, value, form, setform)

    const submitForm = async () => {
        const response: any = await authenticate({
            email: form.email.value,
            password: form.password.value,
        })

        localStorage.setItem("token", response.data.idToken)
    }

    if (authenticationResult.isSuccess) {
        return <Navigate to={"/"} />
    }

    return (
        <div className='split-page'>
            <div className='split-page-video-container col-6 col-t-4 col-m-12'>
            </div>

            <div className='split-page-content-container col-6 col-t-8 col-m-12 p-m'>
                <div className='account-form'>
                    <h1 className='m-b-m'>Welcome back!</h1>

                    <FormCol className={"m-b-xs"}>
                        <TextField
                            label='Email'
                            mandatory={true}
                            value={form.email.value}
                            errorMessage={form.email.errorMessage}
                            onChange={(value) => set("email", value)}
                        />
                        <PasswordField
                            label='Password'
                            mandatory={true}
                            value={form.password.value}
                            errorMessage={
                                form.password.errorMessage || (authenticationResult.isError ? "Request failed." : "")
                            }
                            onChange={(value) => set("password", value)}
                        />
                    </FormCol>

                    <div className='m-b-m'>
                        <span>
                            If you don&apos;t have an account, go to the <Link to='/register'>registration</Link> page.
                            If you forgot your password, you can recover it <Link to='/forgot-password'>here</Link>.
                        </span>
                    </div>

                    <MainCTA disabled={!form.isValid} onClick={submitForm}>
                        Log in
                    </MainCTA>
                </div>
            </div>
        </div>
    )
}

export default Login
