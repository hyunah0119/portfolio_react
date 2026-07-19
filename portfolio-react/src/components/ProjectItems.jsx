import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectItems = ({ project }) => {
  const titleClass = 'font-bold text-sm sm:text-base underline underline-offset-6';
  const subTitleClass = 'mt-2 font-medium text-sm sm:text-[15px] text-[#666] dark:text-[#EDE4D0]';
  const tableborderRightClass = 'border-r border-[#e5e5e5] dark:border-[#4a4a4a]';

  return (
    <div>
      {/* title */}
      <div>
        <h3 className="text-xl font-bold font-gmarket">{project.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{project.technologies.join(' · ')}</p>
      </div>

      {/* details */}
      <div className="flex flex-col sm:flex-row items-center gap-5 border-t mt-5 pt-5">
        {/* image */}
        <div className="w-full sm:w-[40%]">
          <div className="py-5 accordion-swiper">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                <div className="w-full flex justify-center items-center">
                  <img src={image.src} alt={image.alt} className="h-auto max-h-80 sm:max-h-110 object-contain" />
                </div>
              </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* info */}
        <div className="w-full sm:w-[60%] border-t sm:border-t-0 sm:border-l border-[#e5e5e5] dark:border-[#4a4a4a] pt-5 px-0 sm:pt-0 sm:px-4">
          <div>
            <h5 className={titleClass}>프로젝트 소개</h5>
            <p className={`${subTitleClass} whitespace-pre-line`}>
              {project.projectOverview}
            </p>
          </div>

          <div className="mt-7.5">
            <h5 className={titleClass}>주요기능</h5>
            <ul className={`${subTitleClass} list-disc list-inside pl-1`}>
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-7.5">
            <h5 className={titleClass}>아키텍처 설계</h5>
            <ul className={`${subTitleClass} list-disc list-inside pl-1`}>
              {project.architecture.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-7.5">
            <h5 className={titleClass}>문제 해결 및 설계 과정</h5>
              {project.problemSolving.map((problem, index) => (
                <dl className={`${subTitleClass} mb-3 last:mb-0`} key={index}>
                  <dt className="font-bold">{problem.title}</dt>
                  <dd>{problem.description}</dd>
                </dl>
              ))}
          </div>

          <div className="mt-7.5">
            <h5 className={titleClass}>리팩터링</h5>
            <ul className={`${subTitleClass} list-disc list-inside pl-1`}>
              {project.refactoring.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-7.5">
            <h5 className={titleClass}>기술 스택</h5>
            <ul className={`${subTitleClass} flex flex-wrap items-center gap-2`}>
              {project.technologies.map((technology, index) => (
                <li key={index} className="text-sm font-medium bg-[#FFA9A3] text-white px-3 py-1 rounded-md">{technology}</li>
              ))}
            </ul>
          </div>

          <div className="mt-7.5">
            <h5 className={titleClass}>Live / GitHub</h5>
            <div className={`${subTitleClass} flex flex-wrap items-center gap-x-3 gap-y-1`}>
              <a href={project.links.live}
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Todo & Mood Tracker 바로가기"
                className="flex items-center gap-1 text-[#FF7A70] hover:text-[#FF9B96] dark:text-[#C46C66] dark:hover:text-[#D97C76] transition-colors duration-250"
              >
                Live <FaExternalLinkAlt className="text-xs" />
              </a>
              <a href={project.links.github}
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Todo & Mood Tracker GitHub 바로가기"
                className="flex items-center gap-1 text-[#FF7A70] hover:text-[#FF9B96] dark:text-[#C46C66] dark:hover:text-[#D97C76] transition-colors duration-250"
              >
                GitHub <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItems