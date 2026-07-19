import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

import { IoIosArrowDown } from "react-icons/io";
import { FaLink } from "react-icons/fa6";

const WorkAccordion = ({ isOpen, onClick, item }) => {
  const titleClass = 'font-bold text-sm sm:text-base';
  const subTitleClass = 'mt-1 font-medium text-sm sm:text-[15px] text-[#666] dark:text-[#EDE4D0]';
  
  return (
    <div className="w-full">
      <div 
        className="w-full flex justify-between items-center border-b px-2 py-3 cursor-pointer" 
        onClick={onClick}
      >
        {/* 아코디언 타이틀 */}
        <div>
          <p className="font-bold text-base sm:text-xl">{item.title}</p>

          <p className="mt-1 font-medium text-sm sm:text-base text-gray-500 dark:text-gray-400 break-keep">{item.description}</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-400 mt-2.5">
            <span className="text-sm font-medium">
              {`${item.technologies.slice(0, 3).join(' · ')}${item.technologies.length > 3 ? ` +${item.technologies.length - 3}` : ''}`}
            </span>
            <span className="hidden sm:block">|</span>
            <span className="block text-sm font-light">{item.date}</span>
          </div>
        </div>
        
        <IoIosArrowDown className={`text-xl font-bold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {/* 아코디언 상세 */}
      <div className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className={`bg-white dark:bg-[#26231F] py-5 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-[40%]">
                <div className="py-5 accordion-swiper">
                  <Swiper
                    pagination={{
                      dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {item.thumbs.map((thumb, index) => (
                      <SwiperSlide key={index}>
                        <div className="w-full flex justify-center items-center">
                          <img className="h-auto max-h-80 object-contain" src={thumb.src} alt={thumb.alt} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              
              <div className="w-full sm:w-[60%] border-l border-[#e5e5e5] dark:border-[#4a4a4a]">
                <div className="px-4">
                  <h5 className={titleClass}>| 프로젝트 개요</h5>
                  <p className={`${subTitleClass} whitespace-pre-line`}>{item.summary}</p>
                </div>
    
                <div className="mt-7.5 px-4">
                  <h5 className={titleClass}>| 담당 업무</h5>
                  <ul className={`${subTitleClass} list-disc list-inside pl-1`}>
                    {item.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
    
                <div className="mt-7.5 px-4">
                  <h5 className={titleClass}>| 주요 기여</h5>
                  <ul className={`${subTitleClass} list-disc list-inside pl-1`}>
                    {item.contributions.map((contribution, index) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: contribution }}
                      />
                    ))}
                  </ul>
                </div>

                <div className="mt-7.5 px-4">
                  <h5 className={titleClass}>| 기술 스택</h5>
                  <ul className={`${subTitleClass} flex flex-wrap items-center gap-2`}>
                    {item.technologies.map((technology, index) => (
                      <li key={index} className="text-sm font-medium bg-[#FFA9A3] text-white px-3 py-1 rounded-md">{technology}</li>
                    ))}
                  </ul>
                </div>
                
                {item.links.length > 0 && (
                  <div className="mt-7.5 px-4">
                    <h5 className={titleClass}>| 사이트 바로가기</h5>
                    <div className={`${subTitleClass} pl-1 flex flex-wrap items-center gap-x-3 gap-y-1`}>
                      {item.links.map((link, index) => (
                        <a key={index} href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1 text-[#FF7A70] hover:text-[#FF9B96] dark:text-[#C46C66] dark:hover:text-[#D97C76] transition-colors duration-250"
                        >
                          <FaLink /> {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkAccordion