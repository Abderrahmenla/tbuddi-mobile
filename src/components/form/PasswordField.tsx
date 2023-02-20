interface Props {
    label?: string
    placeholder?: string
    errorMessage?: string
    mandatory?: boolean
    readOnly?: boolean
    value?: string
    onChange?: (e: string) => void
}

function PasswordField({
    label = "",
    placeholder = "",
    errorMessage = "",
    mandatory = false,
    readOnly = false,
    value = "",
    onChange = () => null,
}: Props) {
    const errorShown = errorMessage && errorMessage.length

    return (
        <div className={`labeled-field-container ${errorShown ? "error-shown" : ""}`}>
            <input
                className='text-field'
                type='password'
                autoComplete='off'
                readOnly={readOnly}
                placeholder={placeholder}
                defaultValue={value}
                onChange={(event) => onChange(event.target.value)}
                required
            />

            {label && label.length && (
                <label className='field-label'>
                    {label}
                    {mandatory && <span className='mandatory'> *</span>}
                </label>
            )}

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

export default PasswordField
