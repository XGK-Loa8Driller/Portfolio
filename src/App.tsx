import Backdrop from './components/Backdrop'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import SoftSkills from './components/SoftSkills'
import Mindset from './components/Mindset'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen font-sans text-ink">
      <Backdrop />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <SoftSkills />
        <Mindset />
        <Contact />
      </main>
    </div>
  )
}
