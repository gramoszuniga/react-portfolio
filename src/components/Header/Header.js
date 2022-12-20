import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => (
  <header className='header center'>
    <h3>
      <Link to='/' className='link'>GRZ.</Link>
    </h3>
    <Navbar />
  </header>
)

export default Header