import { IoIosArrowDown } from "react-icons/io";

const WorkAccordion = () => {
  return (
    <div className="w-full sm:w-[70%]">
      <div className="w-full flex justify-between items-center border-b px-2 py-3 transition-transform duration-250 cursor-pointer">
        <div>
          <p className="font-bold text-base sm:text-lg">DL그룹 아파트 분양 웹사이트 운영</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-[#666] dark:text-[#EDE4D0]">
            <span className="text-sm font-medium">JSP · React · TypeScript</span>
            <span className="hidden sm:block">|</span>
            <span className="block text-sm font-light">2020.07 ~ 2026.01</span>
          </div>

          <p className="mt-2.5 font-medium text-sm sm:text-base">
            분양 및 브랜드 웹사이트 UI 개발·운영, <br/>신규 페이지 구축 및 유지보수
          </p>
        </div>
        
        <IoIosArrowDown className="text-xl font-bold" />
      </div>

      <div className="bg-white dark:bg-[#26231F] px-2 py-3">
        아코디언 상세
      </div>
    </div>
  )
}

export default WorkAccordion