interface Props {
    label?: string
    placeholder?: string
    errorMessage?: string
    mandatory?: boolean
    readOnly?: boolean
    onChange?: (e: string) => void
    value?: string
    maxLength?: number
}

function TextField({
    label = "",
    placeholder = "",
    value = "",
    errorMessage = "",
    maxLength = undefined,
    mandatory = false,
    readOnly = false,
    onChange = () => null,
}: Props) {
    const errorShown = errorMessage && errorMessage.length

    return (
        <div className={`labeled-field-container ${errorShown ? "error-shown" : ""}`}>
            <input
                className={`text-field ${errorShown ? "error" : ""}`}
                type='text'
                autoComplete='off'
                readOnly={readOnly}
                placeholder={placeholder}
                defaultValue={value}
                onChange={(event) => onChange(event.target.value)}
                maxLength={maxLength}
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
                    <img className='m-r-xxs' src='/images/icons/error-exclamation-mark.svg' alt='' />
                    {errorMessage}
                </span>
            )}
        </div>
    )
}

export default TextField
