import TextField from "../../components/form/TextField"
import { useEffect, useState } from "react"
import PasswordField from "../../components/form/PasswordField"
import { Link, Navigate } from "react-router-dom"
import FormRow from "~/components/form/FormRow"
import validation, { setField } from "~/util/validation"
import MainCTA from "~/components/form/MainCTA"
import FormCol from "~/components/form/FormCol"
import DropdownField from "~/components/form/DropdownField"
import languages from "~/util/languages"
import { useLazyGetAllCountriesQuery, useRegisterHostUserMutation } from "~/api/tbuddiApi"
import toast from "~/util/toast"

function Register() {
    const [register, registrationResult] = useRegisterHostUserMutation()
    const [getCountries, countries] = useLazyGetAllCountriesQuery()

    const [form, setform] = useState({
        isValid: false,

        firstName: {
            value: "",
            isValid: true,
            errorMessage: undefined,
            validators: [validation.required],
        },
        lastName: {
            value: "",
            isValid: true,
            errorMessage: undefined,
            validators: [validation.required],
        },
        email: {
            value: "",
            isValid: true,
            errorMessage: undefined,
            validators: [validation.required, validation.isEmail],
        },
        password: {
            value: "",
            isValid: true,
            errorMessage: "",
            validators: [validation.required],
        },
        repeatPassword: {
            value: "",
            isValid: true,
            errorMessage: "",
            validators: [validation.required],
        },
        phoneNumber: {
            value: "",
            isValid: true,
            errorMessage: undefined,
            validators: [validation.required],
        },
        addressLine: {
            value: "",
            isValid: true,
            errorMessage: undefined,
            validators: [validation.required],
        },
        zipCode: {
            value: "",
            isValid: true,
            errorMessage: undefined,
            validators: [validation.required],
        },
        city: {
            value: "",
            isValid: true,
            errorMessage: undefined,
            validators: [validation.required],
        },
        country: {
            value: 0,
            isValid: true,
            errorMessage: undefined,
            validators: [validation.required],
        },
        langKey: {
            value: "",
            isValid: true,
            errorMessage: undefined,
            validators: [validation.required],
        },
    })

    const set = (key: string, value: any) => setField(key, value, form, setform)

    const submitForm = async () => {
        const result: any = {}

        Object.keys(form).forEach((key: string) => {
            if (key != "isValid") {
                const current: any = form[key as keyof typeof form]

                result[key] = current.value
            }
        })

        result.address = result.addressLine
        result.countryId = +result.country

        await register({
            registerHostUserRequest: result,
        })

        toast.success("Account info saved!")
    }

    useEffect(() => {
        getCountries()
    }, [])

    if (registrationResult.isSuccess) {
        return <Navigate to={"/login"} />
    }

    return (
        <div className='split-page'>
            <div className='split-page-video-container col-6 col-t-4 col-m-12'>
                <video autoPlay muted loop>
                    <source src='/videos/balloons.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className='split-page-content-container col-6 col-t-8 col-m-12 p-m'>
                <div className='account-form'>
                    <h1 className='m-b-m'>Start hosting!</h1>

                    <FormCol className='m-b-m'>
                        <FormRow>
                            <div className='col-6 col-m-12'>
                                <TextField
                                    label='First name'
                                    mandatory={true}
                                    value={form?.firstName?.value}
                                    errorMessage={form.firstName.errorMessage}
                                    onChange={(value) => set("firstName", value)}
                                />
                            </div>
                            <div className='col-6 col-m-12'>
                                <TextField
                                    label='Last name'
                                    mandatory={true}
                                    value={form?.lastName?.value}
                                    errorMessage={form.lastName.errorMessage}
                                    onChange={(value) => set("lastName", value)}
                                />
                            </div>
                        </FormRow>

                        <div></div>

                        <FormRow>
                            <TextField
                                label='Email'
                                mandatory={true}
                                value={form?.email?.value}
                                errorMessage={form.email.errorMessage}
                                onChange={(value) => set("email", value)}
                            />
                        </FormRow>
                        <FormRow>
                            <PasswordField
                                label='Password'
                                mandatory={true}
                                value={form?.password?.value}
                                errorMessage={form.password.errorMessage}
                                onChange={(value) => {
                                    set("password", value)

                                    if (value != form.repeatPassword.value)
                                        form.repeatPassword.errorMessage = "Passwords do not match."
                                }}
                            />
                        </FormRow>
                        <FormRow>
                            <PasswordField
                                label='Repeat password'
                                mandatory={true}
                                value={form?.repeatPassword?.value}
                                errorMessage={form.repeatPassword.errorMessage}
                                onChange={(value) => {
                                    set("repeatPassword", value)

                                    if (value != form.password.value)
                                        form.repeatPassword.errorMessage = "Passwords do not match."
                                }}
                            />
                        </FormRow>

                        <div></div>

                        <FormRow>
                            <TextField
                                label='Phone number'
                                mandatory={true}
                                value={form?.phoneNumber?.value}
                                errorMessage={form.phoneNumber.errorMessage}
                                onChange={(value) => set("phoneNumber", value)}
                            />
                        </FormRow>

                        <div></div>

                        <FormRow>
                            <div className='col-4 col-m-12'>
                                <TextField
                                    label='Address'
                                    mandatory={true}
                                    value={form?.addressLine?.value}
                                    errorMessage={form.addressLine.errorMessage}
                                    onChange={(value) => set("addressLine", value)}
                                />
                            </div>
                            <div className='col-4 col-m-12'>
                                <TextField
                                    label='City'
                                    mandatory={true}
                                    value={form?.city?.value}
                                    errorMessage={form.city.errorMessage}
                                    onChange={(value) => set("city", value)}
                                />
                            </div>
                            <div className='col-4 col-m-12'>
                                <TextField
                                    label='ZIP'
                                    mandatory={true}
                                    value={form?.zipCode?.value}
                                    errorMessage={form.zipCode.errorMessage}
                                    onChange={(value) => set("zipCode", value)}
                                />
                            </div>
                        </FormRow>
                        <FormRow>
                            <div className='col-6 col-m-12'>
                                <DropdownField
                                    mandatory={true}
                                    errorMessage={form.country.errorMessage}
                                    value={form?.country?.value}
                                    onChange={(value) => set("country", value)}
                                >
                                    <option>Country</option>
                                    {countries?.data?.map((country) => (
                                        <option key={country.id} value={country.id}>
                                            {country.name}
                                        </option>
                                    ))}
                                </DropdownField>
                            </div>
                            <div className='col-6 col-m-12'>
                                <DropdownField
                                    mandatory={true}
                                    errorMessage={
                                        form.langKey.errorMessage ||
                                        (registrationResult.isError ? "Request failed." : "")
                                    }
                                    value={form.langKey.value}
                                    onChange={(value) => set("langKey", value)}
                                >
                                    <option>Language</option>
                                    {Object.keys(languages).map((languageCode) => (
                                        <option key={languageCode} value={languageCode}>
                                            {languages[languageCode as keyof typeof languages]}
                                        </option>
                                    ))}
                                </DropdownField>
                            </div>
                        </FormRow>
                    </FormCol>

                    <div className='m-b-m'>
                        <span>
                            By registering, you agree to our <Link to='/terms-and-conditions'>Terms & Conditions</Link>
                        </span>
                    </div>

                    <div className='m-b-m'>
                        <span>
                            If you already have an account, go to the <Link to='/login'>login</Link> page. If you forgot
                            your password, you can recover it <Link to='/forgot-password'>here</Link>.
                        </span>
                    </div>

                    <MainCTA disabled={!form.isValid} onClick={submitForm}>
                        Register
                    </MainCTA>
                </div>
            </div>
        </div>
    )
}

export default Register
