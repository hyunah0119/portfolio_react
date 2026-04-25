export default function NavLinkItem({ children, title, href, variant, onClick }) {
    const className = variant === 'pc' ? 'transition-colors duration-200 ease-in font-bold text-lg sm:text-xl hover:text-[#FF9B96] dark:hover:text-[#F5D96B]' : '';

    return (
        <a href={href} aria-label={title} className={className} onClick={onClick}>
            {children}
        </a>
    )
}
