import Header from './components/Header'
import FloatingActions from './components/FloatingActions';
import SectionWrapper from './components/SectionWrapper';
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScrollY = () => {
      const scrollY = window.scrollY;

      scrollY > 50 ? setIsScroll(true) : setIsScroll(false);
    }

    window.addEventListener('scroll', handleScrollY)

    return() => window.removeEventListener('scroll', handleScrollY)
  }, []);

  const handleDarkMode = () => {
    setIsDark(!isDark);
  }

  return (
    <div className={`text-[#333] ${isDark ? 'dark' : ''}`} id='home'>
      <main className='relative w-full h-screen'>
        {/* Hero */}
        <section className='bg-[#FFF2B2] dark:bg-[#2F2818]'>
          <Header isDark={isDark} />
        </section>

        {/* about me */}
        <SectionWrapper variant='white'>about me</SectionWrapper>

        {/* work */}
        <SectionWrapper variant='yellow'>work</SectionWrapper>

        {/* project */}
        <SectionWrapper variant='white'>project</SectionWrapper>

        {/* skill */}
        <SectionWrapper variant='yellow'>skill</SectionWrapper>

        {/* contact */}
        <SectionWrapper variant='white'>contact</SectionWrapper>

        {/* footer */}
        <section className='bg-[#E6E2DD] dark:bg-[#24211D] dark:text-[#D8D1C7]'>footer</section>

        <FloatingActions isDark={isDark} isScroll={isScroll} onToggleTheme={handleDarkMode} />
      </main>
    </div>
  )
}

export default App
