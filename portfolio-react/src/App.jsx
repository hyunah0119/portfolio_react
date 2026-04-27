import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import WorkExperience from './sections/WorkExperience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import FloatingActions from './components/FloatingActions';
import SectionWrapper from './components/SectionWrapper';
import SectionTitle from './components/SectionTitle';
import Footer from './components/Footer';
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  // 플로팅 btn 보임/숨김
  useEffect(() => {
    const handleScrollY = () => {
      const scrollY = window.scrollY;

      scrollY > 50 ? setIsScroll(true) : setIsScroll(false);
    }

    window.addEventListener('scroll', handleScrollY)

    return() => window.removeEventListener('scroll', handleScrollY)
  }, []);

  // dark mode
  const handleDarkMode = () => {
    setIsDark(!isDark);
  };

  // top btn
  const handleTopBtn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`text-[#333] font-pretendard scroll-smooth ${isDark ? 'dark' : ''}`} id='home'>
      <main className='relative w-full h-full scroll-smooth'>
        {/* Hero */}
        <Hero isScroll={isScroll} />

        {/* about me */}
        <SectionWrapper variant='white' subTitle='ABOUT ME' id='about'>
          <AboutMe />
        </SectionWrapper>

        {/* work */}
        <SectionWrapper variant='yellow' subTitle='WORK' id='work'>
          <WorkExperience />
        </SectionWrapper>

        {/* project */}
        <SectionWrapper variant='white' subTitle='PROJECT' id='project'>
          <Projects />
        </SectionWrapper>

        {/* skill */}
        <SectionWrapper variant='yellow' subTitle='SKILL' id='skill'>
          <Skills />
        </SectionWrapper>

        {/* footer */}
        <Footer />

        <FloatingActions 
          isDark={isDark} 
          isScroll={isScroll} 
          onToggleTheme={handleDarkMode} 
          onScrollTop={handleTopBtn} 
        />
      </main>
    </div>
  )
}

export default App
