import { ReactNode } from "react"

interface Props {
    className?: string
    children?: ReactNode | ReactNode[]
}

function FormRow({ className = "", children = null }: Props) {
    return <div className={className + "form-row"}>{children}</div>
}

export default FormRow
