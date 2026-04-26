export default function Link({ children, variant, href, aria }) {
    const className = variant === 'border' ? 'border border-[#FFA9A3] text-[#FFA9A3] hover:border-[#FF9B96] hover:bg-[#ff9088] hover:text-white dark:hover:bg-[#C46C66] dark:hover:border-[#C46C66]' : 'bg-[#FFA9A3] dark:bg-[#C46C66] hover:bg-[#FF9B96] dark:hover:bg-[#D97C76] text-white'
    
    return (
        <a 
            className={`block w-full sm:w-37.5 font-bold text-center rounded-[20px] py-3 cursor-pointer transition-all duration-300 ease-in ${className}`}
            href={href}
            target="_blank"
            aria-label={`${aria} 바로가기`}
        >
            {children}
        </a>
    )
}
