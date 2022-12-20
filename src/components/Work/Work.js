import '../About/About.css'
import './Work.css'

const Work = () => (
    <div className='about center'>
        <h2 className='work_title'>WORK EXPERIENCE</h2>
        <h3 className='about__role'>Solutions Developer (2021 - Present)</h3>
        <h4>Skyjack Inc., Guelph, Canada</h4>
        <ul className='work__list'>
            <li>
                Architect in AWS (ECS Fargate and RDS) and write a dockerized
                Java microservice that uses a vendor&#39; Apache Kafka topic to
                detect telematic devices replaced by customers after shipment
                from the company&#39;s manufacturing plants, neutralizing the
                effects of these events in the Digital Services department&#39;s
                products and services
            </li>
            <li>
                Host in AWS (NAT Gateway, EventBridge, and RDS) and develop an
                AWS Lambda in Java that validates and intakes telematics
                devices&#39; data and pushes them for eventual activation, fully
                automating the process for the Canadian locations of the company
            </li>
            <li>
                Provision the AWS infrastructure needed to support the
                Engineering department&#39;s development of dashboards for
                telematics data analysis and business intelligence
            </li>
            <li>
                Configure, in AWS, IAM, VPC, security groups, route tables, and
                Route 53, and build CI/CD pipelines with CodeCommit, ECR,
                CodeBuild, CodeDeploy, and CodePipeline for past and current
                software projects
            </li>
        </ul>
        <h3 className='about__role'>
            Solutions Developer Jr: Tech & Innovation (2018 - 2021)
        </h3>
        <h4>Skyjack Inc., Guelph, Canada</h4>
        <ul className='work__list'>
            <li>
                Developed a POC mobile application with React-Native to trigger,
                over BLE or GSM, autonomous functions in electric machines and
                to display their results. This application was used in trade
                shows and presentations to stakeholders and investors
            </li>
            <li>
                Queried data from numerous RESTful web APIs and Apache Kafka
                topics to develop Java reporting tools for the use of internal
                stakeholders and customers
            </li>
            <li>
                Designed relational databases to support the Digital Services
                department&#39;s software projects and created their Amazon Web
                Services account, assuming the role of administrator, to host
                them
            </li>
            <li>
                Architected in AWS (EC2 and RDS) and developed a Java middleware
                that uses a vendor&#39;s Apache Kafka topics to consume battery
                telematics data and process them with a battery management
                system algorithm developed by the Engineering department. The
                results are then produced back to the vendor for eventual
                presentation in their web application to customers so that they
                can improve battery care and maximize battery life
            </li>
            <li>
                Hosted in AWS (ALB, ASG, Route 53, EC2, S3, and RDS) and
                developed a web application (frontend in React and backend in
                Java) that displays curated live telematics data over WebSocket
                to operators when a QR code on a machine is scanned, vastly
                facilitating data access for troubleshooting as no account is
                required
            </li>
            <li>
                Designed in AWS (ALB, ASG, EC2, and RDS) and wrote a Java web
                application that uses a third party&#39;s RESTful web APIs to
                automate and batch manual activations of telematics devices,
                significantly increasing the efficiency and effectiveness of the
                process
            </li>
        </ul>
    </div>
)

export default Work