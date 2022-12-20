import '../About/About.css'
import '../About/Skills.css'
import '../Work/Work.css'
import CCP_BADGE_IMG from '../../img/aws-certified-cloud-practitioner.png';

const CCP_BADGE_URL = 'https://www.credly.com/badges/' +
    '7a0cf1bb-f168-4dc1-97bf-fc96e806356e/public_url';

const Certifications = () => (
    <div className='about center'>
        <h2 className='work_title'>CERTIFICATIONS</h2>
        <h3 className='about__role work_title'>Amazon Web Services</h3>
        <section className='section__badges'>
            <ul className='badges__list'>
                <li className='badges__list-item badge badge--plain'>
                    <a href={CCP_BADGE_URL}>
                        <img style={{ width: '150px', height: '150px' }}
                            src={CCP_BADGE_IMG} alt='CCP Badge' />
                    </a>
                </li>
                <li className='badges__list-item badge badge--plain'>
                    <a href={CCP_BADGE_URL}>
                        <img style={{ width: '150px', height: '150px' }}
                            src={CCP_BADGE_IMG} alt='CCP Badge' />
                    </a>
                </li>
                <li className='badges__list-item badge badge--plain'>
                    <a href={CCP_BADGE_URL}>
                        <img style={{ width: '150px', height: '150px' }}
                            src={CCP_BADGE_IMG} alt='CCP Badge' />
                    </a>
                </li>
            </ul>
        </section>
    </div>
)

export default Certifications