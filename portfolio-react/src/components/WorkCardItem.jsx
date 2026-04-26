export default function WorkCardItem({ src, alt, title, onClick }) {
    return (
        <div 
            className="w-full bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:bg-[#26231F] dark:border dark:border-[#3A352F] dark:shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:shadow-[0_4px_12px_rgba(0,0,0,0.08)] sm:transition-all sm:duration-300 sm:ease-in-out cursor-pointer sm:hover:-translate-y-1 sm:hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
            onClick={onClick}
        >
            <img src={src} alt={alt} className="rounded-tl-[20px] rounded-tr-[20px]" />

            <div className="p-5 border-t border-[#E6E2DD]">
                <p className="text-base sm:text-lg font-medium text-center">{title}</p>
            </div>
        </div>
    )
}
