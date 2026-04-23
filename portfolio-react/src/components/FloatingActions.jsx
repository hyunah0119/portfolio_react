import FloatingBtn from "./FloatingBtn"
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

export default function FloatingActions({ isDark, onToggleTheme, isScroll }) {
    const iconClassNames = "transition-all duration-300 ease-in group-hover:scale-115";

    return (
        <div className="absolute right-[5%] sm:right-10 bottom-7.5">
            <FloatingBtn isDark={isDark} onToggleTheme={onToggleTheme}>
                {isDark ? <MdLightMode className={iconClassNames} /> : <MdDarkMode className={iconClassNames} />}
            </FloatingBtn>

            {/* 스크롤 시 보임 */}
            {isScroll ?
                <FloatingBtn isDark={isDark}>
                    <FaArrowUp className={iconClassNames} />
                </FloatingBtn>
            : ''}
        </div>
    )
}
