import About from "./components/About"
import Contact from "./components/Contact"
import Experiences from "./components/Experiences"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technolgies from "./components/Technolgies"
import Volunteering from "./components/Volunteering"

function App() {
  return (
    <div className="min-h-screen relative text-neutral-300 antialiased selection:bg-pink-400 selection:text-pink-800">
      <div className="fixed inset-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="relative z-[1] container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technolgies />
        <Experiences />
        <Projects />
        <Volunteering />
        <Contact />
      </div>
    </div>
  )
}

export default App