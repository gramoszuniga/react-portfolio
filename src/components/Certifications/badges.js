import CCP_BADGE_IMG from '../../img/aws-certified-cloud-practitioner.png';
import CDA_BADGE_IMG from '../../img/aws-certified-developer-associate.png';
import ARCH_BADGE_IMG from '../../img/aws-learning-architecting.png';

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
    url: 'https://www.credly.com/badges/44966e46-d68e-4d22-b041-2ed116544a81/' +
      'public_url',
    img: ARCH_BADGE_IMG,
    alt: 'AWS Learning: Architecting Badge'
  }
]

export default badges