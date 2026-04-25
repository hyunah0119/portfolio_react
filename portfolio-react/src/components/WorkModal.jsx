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

export default function WorkModal({ title, selectWork }) {
    return (
        <div className="w-full h-full flex justify-center items-center absolute inset-0 z-110 bg-[rgba(0,0,0,0.5)]">
            <div className="w-[90%] sm:w-4xl bg-white rounded-xl">
                <div className="flex justify-between items-center px-4 py-5 border-b border-[#eee]">
                    <h3 className="text-base sm:text-xl font-bold">타이틀</h3>
                    <button className="w-9 h-9 flex justify-center items-center text-base sm:text-xl font-bold cursor-pointer"><IoClose /></button>
                </div>

                <div className="px-4 py-5 border-b border-[#eee] modal-swiper">
                    {selectWork ? (
                        <Swiper
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                        >
                            {selectWork?.detail?.detail_img.map((item, index) => (
                                <SwiperSlide key={index}>
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

                <div className="px-4 py-5 border-b border-[#eee]">
                    {selectWork?.detail?.summary && 
                        <>
                            <h5 className="text-sm font-bold">프로젝트 설명</h5>
                            <p className="text-sm font-medium text-[#555] mt-2 mb-3.5 break-keep">{selectWork?.detail?.summary}</p>
                        </>
                    }
                    
                    <h5 className="text-sm font-bold">프로젝트 설명</h5>
                    <ul className="text-sm font-medium text-[#555] leading-[1.6] mt-2 pl-4.5 break-keep">
                        {selectWork ? (
                            selectWork?.detail?.info.map((item, index) => (
                                <li className="list-disc" key={item.index}>{item.index}</li>
                            ))
                        ) : (
                            <li>설명이 없습니다.</li>
                        )}
                    </ul>
                </div>
                
                {selectWork?.detail?.links && 
                    <div className="px-4 py-5 flex items-center gap-4">
                        {selectWork?.detail?.links.map((item, index) => (
                            <a 
                                key={item.index}
                                href={item.url} 
                                aria-label="" 
                                rel="noopener noreferrer" 
                                target="_blank" 
                                className="flex items-center gap-1 text-sm font-bold text-[#FF7A70]"
                            >
                                {item.label} <FiExternalLink />
                            </a>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}
