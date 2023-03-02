import CheckIcon from "~/components/ui/icons/check"
import { Link } from "react-router-dom"
export default function EmailConfirmation() {
    return (
        <div className='wrapper'>
            <div className='row'>
                <CheckIcon fill='#FF5A5F' />
                <h4>Email verification</h4>
            </div>
            <p>
                An email verification was sent to your email with the username <span>@someusername</span>.
            </p>
            <button className='button'>
                <Link to='/'>Home Screen</Link>
            </button>
        </div>
    )
}
