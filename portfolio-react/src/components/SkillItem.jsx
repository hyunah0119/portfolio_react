import { GoDotFill } from "react-icons/go";

export default function SkillItem({ id, items, info, type }) {
    return (
        <div className="mb-5 last:mb-0" data-type={type}>
            <dl className="text-[#666] dark:text-[#CFC7B8]">
                <dt className="text-base sm:text-xl font-gmarket font-bold">· {items.join(' / ')}</dt>
                <dd className="text-[15px] sm:text-lg font-medium break-keep">{info}</dd>
            </dl>
        </div>
    )
}
