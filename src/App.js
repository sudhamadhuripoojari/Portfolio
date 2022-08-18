import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Tech from './components/tech/Tech';
import ProjectList from './components/projDetails/ProjectList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';


function App() {

// Using the context hook

const theme = useContext(ThemeContext);
const darkMode = theme.state.darkMode;


  return (
    <div  style ={{backgroundColor:darkMode ? '#222' : 'white', color: darkMode ? 'white': '#222'}}>
      <Intro/>
      <About/>
      <Tech/>
      <ProjectList/>
      <Contact/>
      <Toggle/>

    </div>
  );
}

export default App;
