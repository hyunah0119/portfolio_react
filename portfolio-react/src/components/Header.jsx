import ThemeToggleBtn from "./FloatingBtn";

export default function Header({ isDark }) {
    const navList = [
        {
            id: 1,
            title: 'ABOUT ME',
            link: '#about'
        },
        {
            id: 2,
            title: 'WORK',
            link: '#work'
        },
        {
            id: 3,
            title: 'PROJECT',
            link: '#project'
        },
        {
            id: 4,
            title: 'SKILL',
            link: '#skill'
        },
        {
            id: 5,
            title: 'CONTACT',
            link: '#contact'
        }
    ];

    return (
        <header className="h-15 flex justify-between items-center sm:px-7.5 px-4 font-pretendard dark:text-[#EDE4D0]">
            <a href="#home" className="font-bold text-[18px] sm:text-2xl">HYNA's Portfolio</a>

            {/* PC 버전 */}
            <ul className="hidden sm:flex sm:items-center sm:gap-8 sm:text-[18px]">
                {navList.map(list => {
                    return (
                    <li key={list.id}>
                        <a title={`${list.title} 바로가기`} href={list.link}>{list.title}</a>
                    </li>
                    )
                })}
            </ul>

            {/* Mobile 버전 */}
        </header>
    )
}
