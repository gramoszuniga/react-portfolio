import './Footer.css'

const Footer = ({ totalVisitors }) => (
  <footer className='footer'>
    <span className='link footer__link'>Total Visitors: {totalVisitors}</span>
    <br />
    <span className='link footer__link'>© 2022</span>
  </footer>
)

export default Footer