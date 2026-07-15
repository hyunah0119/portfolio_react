import AboutMeCard from "./AboutMeCard";

import { HiOutlinePaintBrush } from "react-icons/hi2";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { TbHierarchy } from "react-icons/tb";

const AboutMeCardList = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h5 className="text-xl sm:text-2xl font-gmarket font-bold underline underline-offset-8 text-[#C46C66]">핵심 역량</h5>

      <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 sm:justify-evenly mt-5">
        <AboutMeCard
          title={'UI 구현 역량'}
          item={'HTML · CSS · SCSS · Tailwind CSS'}
          text={'웹 퍼블리싱 실무 경험을 바탕으로 디자인 의도를 정확하게 구현하고, 반응형과 사용성을 고려한 인터페이스를 개발합니다.'}
        >
          <HiOutlinePaintBrush className="text-4xl" />
        </AboutMeCard>

        <AboutMeCard
          title={'유지보수 가능한 코드'}
          item={'TypeScript · Component Design · Custom Hooks'}
          text={'컴포넌트 분리와 Custom Hooks, TypeScript 기반의 타입 설계를 통해 재사용성과 유지보수성을 고려한 코드를 작성합니다.'}
        >
          <HiOutlineCodeBracket className="text-4xl" />
        </AboutMeCard>

        <AboutMeCard
          title={'상태 관리와 데이터 흐름'}
          item={'TanStack Query · Zustand · Supabase'}
          text={'TanStack Query와 Zustand를 활용하여 서버 상태와 클라이언트 상태를 역할에 맞게 분리하고 안정적인 데이터 흐름을 구현합니다.'}
        >
          <TbHierarchy className="text-4xl" />
        </AboutMeCard>
      </div>
    </div>
  )
}

export default AboutMeCardList