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
                    6년간 대기업 인하우스 환경에서 웹사이트 운영 및 관리자 시스템 UI 구축을 담당하며,<br/>
                    다양한 서비스의 퍼블리싱과 화면 구현 실무를 경험했습니다.
                    <br/><br/>
                    JSP 기반 레거시 환경부터 React 프로젝트까지 폭넓게 참여하며,
                    TypeScript, 컴포넌트 단위 개발, React Router 기반 화면 구성 등
                    프론트엔드 개발 방식에 대한 실무 경험을 쌓았습니다.
                    <br/><br/>
                    특히 장기 운영 프로젝트 경험을 통해
                    기존 코드를 빠르게 분석하고 구조를 이해하며,
                    오류 수정과 안정적인 유지보수까지 책임감 있게 수행해왔습니다.
                    <br/><br/>
                    개인 프로젝트에서는 React + Vite 환경에서
                    폴더 구조 설계, 상태 관리, API 연동, CRUD 기능 구현 등을 직접 진행하며,
                    사용자 경험과 코드 품질을 함께 고려하는 프론트엔드 개발자로 성장하고 있습니다.
                </p>
            </div>
        </div>
    )
}
