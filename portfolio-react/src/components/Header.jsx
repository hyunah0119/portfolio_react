import { useEffect, useState } from "react";
import NavLinkItem from "./NavLinkItem";
import { navItems } from '../data/navItems'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Header({ isScroll }) {
    // nav menu
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavOpen = () => {
        setIsNavOpen(true)
    }

    const handleNavClose = () => {
        setIsNavOpen(false)
    }

    // nav 열렸을 때 body 스크롤 잠금
    useEffect(() => {
        const body = document.body;

        if(isNavOpen) {
            body.style.overflow = 'hidden'
            body.style.touchAction = 'none'
        } else {
            body.style.overflow = ''
            body.style.touchAction = ''
        }

        return () => {
            body.style.overflow = ''
            body.style.touchAction = ''
        }
    }, [isNavOpen]);

    return (
        <header className={`h-15 flex justify-between items-center fixed inset-0 sm:px-7.5 px-4 font-pretendard z-100 dark:text-[#EDE4D0] ${isScroll ? 'bg-[rgba(255,255,255,0.95)] dark:bg-[rgba(0,0,0,0.95)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]' : ''}`}>
            <NavLinkItem title="HYNA's Portfolio Home 바로가기" href="#home" variant='pc'>HYNA's Portfolio</NavLinkItem>

            {/* PC 버전 */}
            <ul className="hidden sm:flex sm:items-center sm:gap-10 sm:text-[18px]">
                {navItems.map(list => {
                    return (
                    <li key={list.id}>
                        <NavLinkItem 
                            title={`${list.title} 바로가기`} 
                            href={list.link} 
                            variant='pc'
                        >
                            {list.title}
                        </NavLinkItem>
                    </li>
                    )
                })}
            </ul>

            {/* Mobile 버전 */}
            <div className="sm:hidden">
                <button className="text-lg" onClick={handleNavOpen}><GiHamburgerMenu /></button>
                
                {isNavOpen && <div className="w-full h-screen absolute top-0 left-0 bg-[rgba(0,0,0,0.5)]"></div>}
                <div className={`w-[80%] h-screen bg-white dark:bg-[#1C1C1C] absolute top-0 right-0 z-50 ${isNavOpen ? '' : 'hidden'}`}>
                    <div className="flex justify-end w-full h-15">
                        <button className="flex justify-center items-center w-12.5 h-full text-2xl" onClick={handleNavClose}><IoClose /></button>
                    </div>
                    <ul className="text-center flex flex-col gap-5">
                        {navItems.map(list => {
                            return (
                            <li key={list.id}>
                                <NavLinkItem 
                                    title={`${list.title} 바로가기`} 
                                    href={list.link} 
                                    variant='mo' 
                                    onClick={handleNavClose}
                                >
                                    {list.title}
                                </NavLinkItem>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </header>
    )
}
