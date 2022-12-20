import { useContext, useLayoutEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Work from './components/Work/Work'
import Education from './components/Education/Education'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

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
            </Routes>
          </main >
          <ScrollToTop />
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </div >
  )
}

export default App