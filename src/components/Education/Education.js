import '../About/About.css'
import '../Work/Work.css'

const Education = () => (
    <div className='about center'>
        <h2 className='work_title'>Education</h2>
        <h3 className='about__role'>
            Advanced Diploma in Computer Programming/Analysis (2015 - 2018)
        </h3>
        <h4>Conestoga College, Kitchener, Canada</h4>
        <p className='work__desc'>
            Advanced diploma program that emphasizes problem-solving skills
            using object-oriented analysis, design, agile methodologies and
            programming techniques to develop enterprise, internet and mobile
            applications.
        </p>
        <ul className='work__list'>
            <li>Selected for the President&#39;s Honour List</li>
            <li>
                Three times conferred the CSI International Academic Excellence
                Award
            </li>
            <li>Achieved a 3.95 GPA</li>
        </ul>
        <h3 className='about__role'>
            Bachelor&#39;s Degree in Translation of Foreign Languages (2006 -
            2011)
        </h3>
        <h4>University of Concepción, Concepción, Chile</h4>
        <p className='work__desc'>
            Degree program that forms professionals of excellence that allow
            fluid and effective communication exchange between
            linguistically and culturally different groups. The curriculum
            ensures graduates are creative, flexible, sensible, adaptable
            to change, proactive, curious, and tolerant and respectful of
            diversity.
        </p>
    </div>
)

export default Education