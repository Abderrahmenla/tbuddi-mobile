interface Props {
    label?: string
    placeholder?: string
    errorMessage?: string
    mandatory?: boolean
    readOnly?: boolean
    onChange?: (e: string) => void
    value?: number
}

function NumberField({
    label = "",
    placeholder = "",
    errorMessage = "",
    mandatory = false,
    readOnly = false,
    onChange = () => null,
    value = 0,
}: Props) {
    const errorShown = errorMessage && errorMessage.length

    return (
        <div className={`labeled-field-container ${errorShown ? "error-shown" : ""}`}>
            <input
                className='text-field'
                type='number'
                autoComplete='off'
                step='.01'
                min='0'
                defaultValue={value}
                readOnly={readOnly}
                placeholder={placeholder}
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

export default NumberField
