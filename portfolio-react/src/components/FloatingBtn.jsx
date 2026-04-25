export default function FloatingBtn({ isDark, onClick, children }) {
    return (
        <button 
        className="flex justify-center items-center w-10 h-10 sm:w-15 sm:h-15 text-[18px] sm:text-[24px] rounded-full bg-[#FFA9A3] hover:bg-[#FF9B96] text-white mb-2.5 last:mb-0 shadow-md cursor-pointer transition-all duration-300 ease-in dark:bg-[#C46C66] dark:hover:bg-[#D97C76] group" 
        onClick={onClick}
        >
            {children}
        </button>
    )
}
