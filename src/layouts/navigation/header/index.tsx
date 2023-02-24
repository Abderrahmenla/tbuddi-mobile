interface Props {
    className?: string
}
import Logo from "~/components/UI/icons/logo"

export default function Header({ className }: Props) {
    return (
        <div className={className}>
            <div className='logo'>
                <Logo />
            </div>
        </div>
    )
}
