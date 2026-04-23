export default function SectionWrapper({ children, variant }) {
    const bgClass = variant === 'yellow' ? 'bg-[rgba(255,248,220,0.6)]' : 'bg-white';

    return (
        <section className={`dark:border-b dark:border-[#3A3527] dark:text-[#EDE4D0] dark:bg-[#1C1C1C] ${bgClass}`}>
            {children}
        </section>
    )
}
