import Header from '../components/Header';

export default function Hero({ isScroll }) {
    return (
        <section className='bg-[#FFF2B2] dark:bg-[#2F2818]'>
            <Header isScroll={isScroll} />
            <div className="flex flex-col justify-center w-full h-screen font-bold px-7.5 sm:px-15 dark:text-[#EDE4D0]">
                <h1 className="font-gmarket text-5xl sm:text-8xl leading-tight">HYNA's Portfolio</h1>

                <div className="mt-5 text-[#666] break-keep dark:text-[#EDE4D0]">
                    <p className="text-base sm:text-xl">퍼블리싱 경험을 바탕으로 React 기반 UI를 구현하는 프론트엔드 개발자</p>
                    <span className="text-sm sm:text-lg">
                        마크업과 스타일링에 대한 이해를 기반으로, 사용자 경험과 데이터 흐름을 함께 고려하는 화면을 만듭니다.
                    </span>
                </div>
            </div>
        </section>
    )
}