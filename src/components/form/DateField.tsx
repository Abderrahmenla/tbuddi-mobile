interface Props {
    label?: string
    min?: string
    max?: string
    placeholder?: string
    errorMessage?: string
    mandatory?: boolean
    readOnly?: boolean
    onChange?: (e: string) => void
    value?: string
}

function DateField({
    label = "",
    min = "",
    max = "",
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
            <input
                className='text-field'
                type='date'
                autoComplete='off'
                readOnly={readOnly}
                defaultValue={value}
                min={min}
                max={max}
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

export default DateField
