import profileImg from '../assets/img/me02.png';

export default function AboutMe() {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
            <div className='w-full sm:w-[50%] flex justify-center items-center'>
                <div className='w-[50%] sm:w-100 h-[50%] sm:h-100 bg-[#FFA9A3] dark:bg-[#C46C66] rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.25),0_2px_6px_rgba(0,0,0,0.05)]'>
                    <img src={profileImg} alt='프로필 이미지' className='w-full' />
                </div>
            </div>
            <div className='w-full sm:w-[50%] mt-7.5 sm:mt-0'>
                <p className="text-base sm:text-lg font-medium text-[#666] dark:text-[#EDE4D0] break-keep">
                    6년간 대기업 인하우스 환경에서 웹사이트 운영 및 시스템 대시보드 구축을 담당해온 UI 중심 프론트엔드 개발자입니다.<br/><br/>
                    JSP 기반 환경부터 React 프로젝트까지 다양한 구조 속에서 퍼블리싱과 UI 구현을 경험했으며, 데이터 흐름을 이해하고 화면 구조를 개선하는 데 강점을 가지고 있습니다.<br/><br/>
                    인하우스 협업 환경에서 기획·디자인·개발 직군과 긴밀히 협업하며, 기존 코드를 빠르게 분석하고 안정적으로 유지보수하는 역할을 수행해왔습니다.<br/><br/>
                    JavaScript(ES6)를 활용한 인터랙션 구현이 가능하며, 데이터 기반 관리자 UI와 대시보드 화면 설계 경험을 보유하고 있습니다.<br/><br/>
                </p>
            </div>
        </div>
    )
}
