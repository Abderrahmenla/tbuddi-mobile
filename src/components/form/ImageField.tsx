/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from "react"
import config from "~/config"

interface Props {
    value?: string
    label?: string
    errorMessage?: string
    mandatory?: boolean
    readOnly?: boolean
    onChange?: (e: string | undefined) => void
}

function ImageField({
    value = "",
    label = "",
    errorMessage = "",
    mandatory = false,
    readOnly = false,
    onChange = () => null,
}: Props) {
    const errorShown = errorMessage && errorMessage.length
    const [backgroundImage, setBackgroundImage] = useState(value ? config.BASE_API_PATH + value : null)

    const displayFile = (file: File | undefined): void => {
        const reader = new FileReader()

        reader.addEventListener("load", () => {
            setBackgroundImage(reader.result as string)

            onChange(reader.result as string)
        })

        reader.readAsDataURL(file as File)
    }

    return (
        <div className={`labeled-field-container ${errorShown ? "error-shown" : ""}`}>
            <div className='image-picker'>
                <label className='image-label' style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <input
                        className='upload-field'
                        type='file'
                        autoComplete='off'
                        readOnly={readOnly}
                        id='button-file'
                        onChange={(event) => {
                            displayFile(event.target.files?.[0])

                            event.target.value = ""
                        }}
                        required
                    />

                    {(!backgroundImage || !backgroundImage.length) && (
                        <img className='plus' src='/images/icons/plus.svg' alt='plus' />
                    )}
                </label>

                {backgroundImage && backgroundImage.length && (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                    <img
                        className='close'
                        src='/images/icons/close.svg'
                        alt='close'
                        onClick={() => setBackgroundImage("")}
                    />
                )}
            </div>

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

export default ImageField
