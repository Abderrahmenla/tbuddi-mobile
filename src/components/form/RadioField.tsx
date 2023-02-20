interface Option {
    value: string
    text: string
}

interface Props {
    options?: Option[]
    value?: string
    onChange?: (e: string) => void
}

function RadioField({ options = [], value = undefined, onChange = () => null }: Props) {
    const generatedName = "dfsiu89wur8923rheuiwdhf" // TODO: Fix.

    return (
        <div className='radio-container'>
            {options.map((option, index) => (
                <label key={generatedName + index} className='radio'>
                    <input
                        type='radio'
                        className='hidden'
                        value={option.value}
                        name={generatedName}
                        defaultChecked={option.value === value}
                        onChange={(event) => onChange(event.target.value)}
                    />
                    <span className='inner-label'></span>
                    <span className='option-text'>{option.text}</span>
                </label>
            ))}
        </div>
    )
}

export default RadioField
