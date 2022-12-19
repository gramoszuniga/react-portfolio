import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => (
  <header className='header center'>
    <h3>
      <a href='/' className='link'>GRZ.</a>
    </h3>
    <Navbar />
  </header>
)

export default Header