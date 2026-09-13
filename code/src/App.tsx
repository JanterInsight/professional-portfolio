import ParticleBackground from './components/ParticleBackground/ParticleBackground'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import BackToTop from './components/BackToTop/BackToTop'
import useScrollPosition from './hooks/useScrollPosition'
import useRevealAnimation from './hooks/useRevealAnimation'

/** Componente raíz que compone todas las secciones del portafolio. */
function App() {
  const scrollY = useScrollPosition()
  useRevealAnimation()

  return (
    <>
      <ParticleBackground />
      <header className="header">
        <Navbar />
        <Profile />
      </header>

      <main className="main">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop visible={scrollY > 300} />
    </>
  )
}

export default App