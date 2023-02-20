interface Props {
    className?: string
}
import Logo from "~/components/UI/icons/logo"

export default function TopNavigation({ className }: Props) {
    return (
        <div className={className}>
            <div className='top-nav__logo'>
                <Logo />
            </div>
        </div>
    )
}
