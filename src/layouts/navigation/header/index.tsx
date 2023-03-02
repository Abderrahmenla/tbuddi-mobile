import Logo from "~/components/ui/icons/logo"

export default function Header({ className }: { className?: string }) {
    return (
        <div className={className}>
            <div className='logo'>
                <Logo />
            </div>
        </div>
    )
}
