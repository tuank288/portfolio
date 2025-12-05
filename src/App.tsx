import Navbar from "@/components/layouts/Navbar"
import Contact from "@/components/sections/Contact"
import Experiences from "@/components/sections/Experiences"
import Hero from "@/components/sections/Hero"
import Skill from "@/components/sections/Skill"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Footer from "@/components/sections/Footer"
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </>
  )
}

export default App
