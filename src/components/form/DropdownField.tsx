import { ReactNode } from "react"

interface Props {
    label?: string
    errorMessage?: string
    mandatory?: boolean
    children?: ReactNode | ReactNode[]
    onChange?: (e: string) => void
    value?: any
}

function DropdownField({
    label = "",
    errorMessage = "",
    mandatory = false,
    children = null,
    onChange = () => null,
    value = "",
}: Props) {
    const errorShown = errorMessage && errorMessage.length

    return (
        <div className={`dropdown-container ${errorShown ? "error-shown" : ""}`}>
            {label && label.length && (
                <label className='field-label'>
                    {label}
                    {mandatory && <span className='mandatory'> *</span>}
                </label>
            )}

            <div className='select-wrapper'>
                <select
                    defaultValue={value}
                    className='dropdown-field'
                    onChange={(event) => onChange(event.target.value)}
                >
                    {children}
                </select>

                <img src='/images/icons/angle-down.svg' alt='dropdown' />
            </div>

            {errorShown && (
                <span className='error-message'>
                    <img
                        className='m-r-xxs'
                        src='/images/icons/error-exclamation-mark.svg'
                        alt='error exclamation mark'
                    />
                    {errorMessage}
                </span>
            )}
        </div>
    )
}

export default DropdownField
