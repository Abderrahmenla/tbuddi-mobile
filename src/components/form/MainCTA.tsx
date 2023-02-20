import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface Props {
    href?: string
    disabled?: boolean
    className?: string
    children?: ReactNode | ReactNode[]
    onClick?: () => void
}

function MainCTA({ href = undefined, disabled = false, className = "", children = null, onClick = () => null }: Props) {
    return href && href.length ? (
        <Link className={`btn ${className}`} to={href}>
            {children}
        </Link>
    ) : (
        <button onClick={onClick} className={`btn ${className}`} disabled={disabled}>
            {children}
        </button>
    )
}

export default MainCTA
