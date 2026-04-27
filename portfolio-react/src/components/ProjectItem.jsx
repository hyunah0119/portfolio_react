import Link from "./Link";

export default function ProjectItem({ title, info, src, detail, liveURL, githubURL }) {
    return (
        <div className="flex flex-col sm:flex-row gap-10 mb-10 last:mb-0">
            <div className="w-full sm:w-75 h-75 rounded-[10px]">
                <img src={src} alt={`${title} 썸네일`} className="rounded-[10px] border border-[#E6E2DD]" />
            </div>

            <div className="flex flex-col justify-between">
                <div>
                    <h5 className="text-lg sm:text-xl font-bold">{title}</h5>
                    <p className="text-sm text-[#666] dark:text-[#CFC7B8] font-light mt-1 whitespace-pre-line">{info}</p>

                    {detail.map((item, index) => (
                        <div className="mt-3.75 text-[#666] dark:text-[#CFC7B8]" key={index}>
                            <span className="text-base sm:text-lg font-medium">{item.title}</span>
                            <ul className="text-sm sm:text-base font-light list-disc pl-5">
                                {item.explain?.map((text, index) => (
                                    <li key={index}>{text}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-5">
                    <Link 
                        variant='full'
                        href={liveURL}
                        aria={title}
                    >
                        Live Demo
                    </Link>
                    <Link 
                        variant='border'
                        href={githubURL}
                        aria={title}
                    >
                        Code(GitHub)
                    </Link>
                </div>
            </div>
        </div>
    )
}
