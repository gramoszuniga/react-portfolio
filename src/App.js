import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Work from './components/Work/Work'
import Education from './components/Education/Education'
import Certifications from './components/Certifications/Certifications'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'

const API_URL = process.env.REACT_APP_API_URL;
const OKAY = 200;

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
};

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const [totalVisitors, setTotalVisitors] = useState(0);
  useEffect(() => {
    async function getTotalVisitors() {
      try {
        const response = await fetch(API_URL, {
          method: 'GET'
        });
        if (response.status !== OKAY) {
          throw Error('error');
        }
        setTotalVisitors((await response.json()).value);
      } catch (error) {
        console.error(error);
      }
    };
    async function updateTotalVisitors() {
      try {
        const response = await fetch(API_URL, {
          method: 'PUT'
        });
        if (response.status !== OKAY) {
          throw Error('error');
        }
        setTotalVisitors((await response.json()).value);
      } catch (error) {
        console.error(error);
      }
    }

    const localStorageItem = localStorage.getItem('hasVisited');
    if (!localStorageItem) {
      updateTotalVisitors();
      localStorage.setItem('hasVisited', 'true');
    } else {
      getTotalVisitors();
    }
  }, []);

  return (
    <div id='top' className={`${themeName} app`}>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <main>
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/education" element={<Education />} />
              <Route path='/certifications' element={<Certifications />} />
            </Routes>
          </main >
          <ScrollToTop />
          <Footer totalVisitors={totalVisitors} />
        </Wrapper>
      </BrowserRouter>
    </div >
  )
}

export default App