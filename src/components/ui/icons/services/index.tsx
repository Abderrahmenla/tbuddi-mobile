const ProfileIcon = ({ fill = "none" }: { fill: string }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill={fill} viewBox='0 0 24 24'>
            <path d='M23 11h-2v-1h2zM2 11h2v-1H2zm17.646-4.94l1.415-1.414-.707-.707-1.415 1.415zM3.94 4.647l1.415 1.415.707-.707L4.647 3.94zM13 4V2h-1v2zm0 15v2h9v1H3v-1h9v-2H3.844A.845.845 0 013 18.156 8.166 8.166 0 0111.156 10H12V9h-2V8h5v1h-2v1h.844A8.166 8.166 0 0122 18.156a.845.845 0 01-.844.844zm7.998-1a7.164 7.164 0 00-7.154-7h-2.688a7.164 7.164 0 00-7.154 7z'></path>
            <path fill='none' d='M0 0h24v24H0z'></path>
        </svg>
    )
}
export default ProfileIcon
