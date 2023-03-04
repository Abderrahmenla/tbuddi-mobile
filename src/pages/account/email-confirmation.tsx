import CheckIcon from "~/components/ui/icons/check"
import { Link } from "react-router-dom"
export default function EmailConfirmation() {
    return (
        <div className='email-confirmation'>
            <div className='wrapper'>
                <div className='row'>
                    <CheckIcon fill='#FF5A5F' />
                    <h4>Email verification</h4>
                </div>
                <p>An email containing a username verification has been sent to the email address provided.</p>
                <button className='button'>
                    <Link to='/'>Home</Link>
                </button>
            </div>
        </div>
    )
}
