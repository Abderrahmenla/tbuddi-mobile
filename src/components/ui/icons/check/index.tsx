const CheckIcon = ({ fill = "none" }: { fill: string }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='none' viewBox='0 0 24 24'>
            <path
                fill={fill}
                fillRule='evenodd'
                d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-5.186-2.419a1 1 0 10-1.628-1.162l-4.314 6.04-2.165-2.166a1 1 0 00-1.414 1.414l3 3a1 1 0 001.52-.126l5-7z'
                clipRule='evenodd'
            ></path>
        </svg>
    )
}
export default CheckIcon
