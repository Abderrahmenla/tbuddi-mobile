const ProfileIcon = ({ fill }: { fill: string }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill={fill || "none"} viewBox='0 0 24 24'>
            <path
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M18 18.702C18 15.671 14.5 15 12 15s-6 .67-6 3.702M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-6-3a3 3 0 11-6 0 3 3 0 016 0z'
            ></path>
        </svg>
    )
}
export default ProfileIcon
