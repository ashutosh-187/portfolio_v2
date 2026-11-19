import './App.css'
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import { useLenis } from './hooks/useLenis';
import FadeIn from './components/FadeIn/FadeIn';
import ContactForm from './sections/ContactForm/ContactForm';
import Education from './sections/Education/Education';
import Experience from './sections/Experience/Experience';
import Hero from './sections/Hero/Hero';
import Projects from './sections/projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {

  useLenis()

  return (
    <div className="root-container app-root bg-[var(--background-dark)]">
      <Loader />
      <Header />
      <FadeIn><Hero /></FadeIn>
      <FadeIn><Experience /></FadeIn>
      <FadeIn><Projects /></FadeIn>
      <FadeIn><Skills /></FadeIn>
      <FadeIn><Education /></FadeIn>
      <FadeIn><ContactForm /></FadeIn>
    </div>
  )
}

export default App