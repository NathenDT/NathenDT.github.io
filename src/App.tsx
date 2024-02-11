import Wrapper from './components/Wrapper'

// Sections
import Contact from './sections/Contact'
import Education from './sections/Education'
import Greeting from './sections/Greeting'
import Projects from './sections/Projects'

export default function App() {
  return (
    <Wrapper>
      <Greeting />

      <Projects />

      <Education />

      <Contact />
    </Wrapper>
  )
}
