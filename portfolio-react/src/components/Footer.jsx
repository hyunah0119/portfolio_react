import Contact from "../sections/Contact"

export default function Footer() {
    return (
        <section className='py-5 px-7.5 sm:py-7.5 sm:px-15 bg-[#E6E2DD] dark:bg-[#24211D] flex flex-col-reverse sm:flex-row gap-4 sm:gap-10 items-start sm:items-center'>
            <p className="text-[#666] dark:text-[#D8D1C7] text-[13px] font-light">
                Designed & Developed by HYNA <br/>
                © 2026 HYNA Portfolio. All rights reserved.
            </p>
            <Contact />
        </section>
    )
}
