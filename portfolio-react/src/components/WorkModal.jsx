import { workList } from "../data/workList";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { IoClose } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

import 'swiper/css';
import 'swiper/css/pagination';

import workDetail01_1 from '../assets/img/work/work01-1.png'
import workDetail01_2 from '../assets/img/work/work01-2.png'
import workDetail01_3 from '../assets/img/work/work01-3.png'

export default function WorkModal({ title, selectWorkCard, isModalOpen, onModalClose }) {
    return (
        <div className={`${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} w-full min-h-dvh flex justify-center items-center fixed inset-0 z-110 bg-[rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out`}>
            <div className={`${isModalOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} w-[90%] sm:w-4xl bg-white dark:bg-[#26231F] rounded-xl max-h-[90dvh] flex flex-col overflow-hidden`}>
                <div className="shrink-0 flex justify-between items-center py-3 px-4 sm:py-5 border-b border-[#eee] dark:border-[#3A352F]">
                    <h3 className="text-base sm:text-xl font-bold">{selectWorkCard?.title}</h3>
                    <button 
                    className="w-9 h-9 flex justify-center items-center text-lg sm:text-2xl font-bold cursor-pointer"
                    onClick={onModalClose}
                    >
                        <IoClose />
                    </button>
                </div>

                <div className="flex-1 min-h-0 overflow-y-auto">
                    <div className="px-4 py-5 border-b border-[#eee] dark:border-[#3A352F] modal-swiper">
                        {selectWorkCard ? (
                            <Swiper
                                slidesPerView={1}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                modules={[Pagination]}
                            >
                                {selectWorkCard?.detail?.detail_img.map((item) => (
                                    <SwiperSlide key={item.src}>
                                        <div className="w-full flex justify-center items-center bg-[#f8f8f8]">
                                            <img src={item.src} alt={item.alt } className="h-auto max-h-80 object-contain" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            ) : (
                                <>
                                    <div className="text-center">사진이 없습니다.</div>
                                </>
                            )}
                    </div>

                    <div className="px-4 py-5 border-b border-[#eee] dark:border-[#3A352F]">
                        {selectWorkCard?.detail?.summary && 
                            <>
                                <h5 className="text-sm font-bold">프로젝트 설명</h5>
                                <p className="text-sm font-medium text-[#555] dark:text-[#CFC7B8] mt-2 mb-3.5 break-keep">{selectWorkCard?.detail?.summary}</p>
                            </>
                        }
                        
                        <h5 className="text-sm font-bold">프로젝트 설명</h5>
                        <ul className="text-sm font-medium text-[#555] dark:text-[#CFC7B8] leading-[1.6] mt-2 pl-4.5 break-keep">
                            {selectWorkCard?.detail?.info ? (
                                selectWorkCard?.detail?.info.map((item, index) => (
                                    <li className="list-disc" key={index}>{item}</li>
                                ))
                            ) : (
                                <li>설명이 없습니다.</li>
                            )}
                        </ul>
                    </div>
                
                    {selectWorkCard?.detail?.links && 
                        <div className="px-4 py-3 sm:py-5 flex flex-row flex-wrap items-center gap-x-2 gap-y-1">
                            {selectWorkCard?.detail?.links.map((item) => (
                                <a 
                                    key={item.url}
                                    href={item.url} 
                                    aria-label="" 
                                    rel="noopener noreferrer" 
                                    target="_blank" 
                                    className="flex items-center gap-1 text-sm font-bold text-[#FF7A70] hover:text-[#FF9B96] dark:text-[#C46C66] dark:hover:text-[#D97C76] transition-colors duration-200 ease-in"
                                >
                                    {item.label} <FiExternalLink />
                                </a>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
