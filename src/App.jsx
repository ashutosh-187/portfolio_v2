import './App.css'
import Header from './components/Header/Header';
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
    <div className="root-container bg-[var(--background-dark)] pl-5 pr-5 pt-2 w-full min-h-screen">
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