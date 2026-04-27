export default function ContactLink({ children, href, label }) {
    return (
        <a 
            href={href} 
            aria-label={label} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex justify-center items-center w-10 h-10 sm:w-12.5 sm:h-12.5 rounded-full bg-[#FFA9A3] dark:bg-[#C46C66] text-xl sm:text-2xl text-white"
        >
            {children}
        </a>
    )
}
