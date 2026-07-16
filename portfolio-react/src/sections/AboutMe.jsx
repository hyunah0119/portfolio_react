import AboutMeCardList from '../components/AboutMeCardList';

import profileImg from '../assets/img/me02.png';

export default function AboutMe() {
    return (
      <>
        <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
          <div className='w-full sm:w-[50%] flex justify-center items-center'>
            <div className='w-[50%] sm:w-80 h-[50%] sm:h-80 bg-[#FFA9A3] dark:bg-[#C46C66] 
              flex justify-center items-center
              rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.25),0_2px_6px_rgba(0,0,0,0.05)]'>
              <img src={profileImg} alt='프로필 이미지' className='w-full sm:w-[80%]' />
            </div>
          </div>
          
          <div className='w-full sm:w-[50%] mt-7.5 sm:mt-0'>
            <p className="text-base sm:text-lg font-medium text-[#666] dark:text-[#EDE4D0] break-keep">
              웹 퍼블리싱 실무에서 다양한 기업 웹사이트의 UI를 구현하고 운영·유지보수를 수행했습니다.<br/><br/>
              반복적인 화면 구현을 넘어 사용자와 데이터가 연결되는 화면을 직접 설계하고 구현하는 과정에 흥미를 느껴 
              React와 TypeScript를 활용한 프로젝트를 진행하며 프론트엔드 개발 경험을 쌓았습니다.<br/><br/>
              현재는 사용자 경험과 유지보수성을 함께 고려하며 React 기반의 프로젝트를 직접 설계하고 개발하고 있습니다.
            </p>
          </div>
        </div>
        <AboutMeCardList />
      </>
    )
}
