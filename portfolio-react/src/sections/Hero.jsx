export default function Hero() {
    return (
        <div className="flex flex-col justify-center w-full h-screen font-bold px-7.5 sm:px-15 dark:text-[#EDE4D0]">
            <h1 className="font-gmarket text-5xl sm:text-8xl leading-tight">HYNA's Portfolio</h1>

            <div className="mt-5 text-[#666] break-keep dark:text-[#EDE4D0]">
                <p className="text-base sm:text-xl">퍼블리싱 경험을 기반으로 데이터 기반 UI를 설계하는 프론트엔드 개발자</p>
                <span className="text-sm sm:text-lg">사용자 경험과 코드 구조를 함께 고민합니다.</span>
            </div>
        </div>
    )
}
