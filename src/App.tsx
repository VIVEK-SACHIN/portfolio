import './App.css'
import './components/Header/Header.css'
import Header from './components/Header/Header';
import NameAndDescription from './components/NameAndDescription/NameAndDescription';
import { loremIpsum } from 'lorem-ipsum';
import { Expertise } from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import ExperienceSection from './components/Experience/ExperienceSection';

function App() {
  const links = {
    about: '#about',
    projects: '#projects',
    contact: '#contact'
  };

  return (
    <>
      <Header
        name="Vivek"
        links={links}
      />
      <div style={{ overflow: 'auto' }}>
        <NameAndDescription/>
        <Expertise />
        <Projects />
        <ExperienceSection />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App;
