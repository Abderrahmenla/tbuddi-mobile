import { ReactNode } from "react"

interface Props {
    children?: ReactNode | ReactNode[]
    className?: string
}

function FormCol({ children = null, className = "" }: Props) {
    return <div className={`form-col ${className}`}>{children}</div>
}

export default FormCol
