import Header from '../components/Header';

export default function Hero({ isScroll }) {
    return (
        <section className='bg-[#FFF2B2] dark:bg-[#2F2818]'>
            <Header isScroll={isScroll} />
            <div className="flex flex-col justify-center w-full h-screen font-bold px-7.5 sm:px-15 dark:text-[#EDE4D0]">
                <h1 className="font-gmarket text-5xl sm:text-8xl leading-tight">HYNA's Portfolio</h1>

                <div className="mt-5 text-[#666] break-keep dark:text-[#EDE4D0]">
                    <p className="text-lg sm:text-2xl">
                      React와 TypeScript를 기반으로 UI와 기능을 구현하는 <span className='text-[#C46C66]'>프론트엔드 개발자</span>입니다.
                    </p>
                    <span className="block text-sm mt-1.25 sm:text-lg">
                        웹 퍼블리싱 실무 경험에서 쌓은 마크업과 스타일링 역량을 바탕으로, 완성도 높고 유지보수하기 좋은 화면을 개발합니다.<br/>
                        사용자 경험을 중요하게 생각하며, 상태 관리와 데이터 흐름까지 고려합니다.
                    </span>
                </div>
            </div>
        </section>
    )
}