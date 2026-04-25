import SectionTitle from "./SectionTitle";

export default function SectionWrapper({ children, variant, subTitle, id }) {
    const bgClass = variant === 'yellow' ? 'bg-[rgba(255,248,220,0.6)]' : 'bg-white';

    return (
        <section className={`p-7.5 sm:p-15 scroll-mt-15 sm:scroll-mt-10 dark:border-b dark:border-[#3A3527] dark:text-[#EDE4D0] dark:bg-[#1C1C1C] ${bgClass}`} id={id}>
            <article className="sm:max-w-350 mx-auto">
                <SectionTitle>{subTitle}</SectionTitle>
                {children}
            </article>
        </section>
    )
}
