import uniqid from 'uniqid'
import badges from './badges'
import '../About/About.css'
import '../About/Skills.css'
import '../Work/Work.css'

const Certifications = () => (
    <div className='about center'>
        <h2 className='work_title'>CERTIFICATIONS</h2>
        <h3 className='about__role work_title'>Amazon Web Services</h3>
        <section className='section__badges'>
            <ul className='badges__list'>
                {badges.map((badge) => (
                    <li key={uniqid()}
                        className='badges__list-item badge badge--plain'>
                        <a href={badge.url}>
                            <img className='badge-img' src={badge.img}
                                alt={badge.alt} />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    </div>
)

export default Certifications