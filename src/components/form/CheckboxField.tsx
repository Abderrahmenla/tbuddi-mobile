interface Props {
    label?: string
    value?: boolean
    onChange?: (e: boolean) => void
}

function CheckboxField({ label = "", value = false, onChange = () => null }: Props) {
    return (
        <div className='checkbox-container'>
            <label className='toggle'>
                <input
                    type='checkbox'
                    className='toggle-checkbox'
                    defaultChecked={value}
                    onChange={(event) => onChange(event.target.checked)}
                />
                <div className='toggle-switch'></div>
                <span className='toggle-label'>{label}</span>
            </label>
        </div>
    )
}

export default CheckboxField
