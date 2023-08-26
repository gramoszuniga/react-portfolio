import CCP_BADGE_IMG from '../../img/aws-certified-cloud-practitioner.png';
import CDA_BADGE_IMG from '../../img/aws-certified-developer-associate.png';
import CSAA_BADGE_IMG from '../../img/aws-certified-solutions-architect-associate.png';

const badges = [
  {
    url: 'https://www.credly.com/badges/7a0cf1bb-f168-4dc1-97bf-fc96e806356e/' +
      'public_url',
    img: CCP_BADGE_IMG,
    alt: 'AWS Certified Cloud Practitioner Badge'
  },
  {
    url: 'https://www.credly.com/badges/cc08080d-a727-496b-883a-472f74b44403/' +
      'public_url',
    img: CDA_BADGE_IMG,
    alt: 'AWS Certified Developer Associate Badge'
  },
  {
    url: 'https://www.credly.com/badges/6cd2c8eb-db29-4318-b144-71c59a170adc/' +
      'public_url',
    img: CSAA_BADGE_IMG,
    alt: 'AWS Certified Solutions Architect Associate'
  }
]

export default badges