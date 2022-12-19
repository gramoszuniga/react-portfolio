import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './About.css'
import './Contact.css'
import './Skills.css'

const About = () => (
  <div>
    <div className='about center'>
      <h1>
        Hello, I am <span className='about__name'>Gonzalo.</span>
      </h1>

      <h2 className='about__role'>A Solutions Developer.</h2>

      <p className='about__desc'>
        Objective-driven Computer Programmer Analyst with four years of work
        experience delivering Java backend solutions leveraging Amazon Web
        Services. Excellent problem-solving, analytical, and organizational
        skills with a detail-oriented mindset. Seeking a full-time remote
        position in which I can use my creativity and talent to architect,
        develop and support high-quality and innovative software solutions for
        the benefit of the organization, further expanding my skill set with new
        tools and technologies.
      </p>

      <div className='about__contact center'>
        <a href='https://github.com/gramoszuniga' aria-label='github' className='link link--icon'><GitHubIcon /></a>
        <a href='https://www.linkedin.com/in/gramoszuniga' aria-label='linkedin' className='link link--icon'><LinkedInIcon /></a>
      </div>
    </div>
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href='mailto:gonzalo.ramos.zuniga@gmail.com'>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  </div>
)

export default About