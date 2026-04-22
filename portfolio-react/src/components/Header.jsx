export default function Header() {
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
        <header className="h-15 flex justify-between items-center">
            <div>
                HYNA's Portfolio
            </div>

            <ul className="hidden sm:flex">
                {navList.map(list => {
                    return (
                    <li key={list.id}>
                        <a title={`${list.title} 바로가기`} href={list.link}>{list.title}</a>
                    </li>
                    )
                })}
            </ul>
        </header>
    )
}
