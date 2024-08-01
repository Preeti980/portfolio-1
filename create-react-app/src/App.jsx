
import './App.css'
import About from './pages/About/About'
import Layout from './components/Layout/layout'
import Contact from './pages/Contact/Contact'
import Education from './pages/Educations/Education'
import Techstack from './pages/Techstack/Techstack'
import Projects from './pages/projects/Projects'
import WorkExp from './pages/workExp/workExp'
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemContext'
import Tada from 'react-reveal/Tada';
import MobileNav from './components/MobileNav/MobileNav'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Certificate from './pages/Cetificates/Certificate'

function App() {
 const {theme}=useTheme();

  return (
    
      <>
      <div id={theme}>
      <ToastContainer />
        <MobileNav/>
        <Layout/>
        <div className="container">
        <About/>
        <Techstack/>
        <Projects/>
        <Education/>
        
        
       <Certificate/>
       <Contact/>
        </div>
       <div className="footer pb-3 ms-3">
        <Tada>
        <h4 className='text-center'> 
        Made with 👩‍🦰 Priti &copy;2024-2025  
        </h4>
        </Tada>
       </div>
       </div>
       <ScrollToTop 
       smooth
       color='#f29f67'
        style={{backgroundColor:'#1e1e2c', borderRadius:"80px"}}/>
      </>
    
  )
}

export default App;
