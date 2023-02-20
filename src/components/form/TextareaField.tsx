interface Props {
    label?: string
    placeholder?: string
    errorMessage?: string
    mandatory?: boolean
    readOnly?: boolean
    onChange?: (e: string) => void
    value?: string
}

function TextareaField({
    label = "",
    placeholder = "",
    errorMessage = "",
    mandatory = false,
    readOnly = false,
    onChange = () => null,
    value = "",
}: Props) {
    const errorShown = errorMessage && errorMessage.length

    return (
        <div className={`labeled-field-container ${errorShown ? "error-shown" : ""}`}>
            <textarea
                className='textarea-field'
                autoComplete='off'
                readOnly={readOnly}
                placeholder={placeholder}
                defaultValue={value}
                onChange={(event) => onChange(event.target.value)}
                required
            ></textarea>

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

export default TextareaField
