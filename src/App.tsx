import './App.css'
import './components/Header.css'
import Header from './components/Header';
import NameAndDescription from './components/NameAndDescription';
import { loremIpsum } from 'lorem-ipsum';
import Expertise from './components/Expertise/Expertise';

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
        <NameAndDescription 
         name="Vivek"
         description={loremIpsum({ count: 20, units: 'words' })}
        />
        <Expertise />
      </div>
    </>
  )
}

export default App
