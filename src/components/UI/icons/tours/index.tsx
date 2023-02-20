interface Props {
    fill?: string
}
const ProfileIcon = ({ fill = "none" }: Props) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill={fill} viewBox='0 0 24 24'>
            <path
                stroke='#464455'
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 19l-4.372-1.749A1 1 0 014 16.323V5.591a.4.4 0 01.548-.372L9 7m0 12l6-2m-6 2V7m6 10l4.451 1.78a.4.4 0 00.549-.37V7.676a1 1 0 00-.629-.928L15 5m0 12V5m0 0L9 7'
            ></path>
        </svg>
    )
}
export default ProfileIcon
