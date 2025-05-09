import {
  siBuymeacoffee,
  siGithub,
  siInstagram,
  siX,
  siYoutube,
} from 'simple-icons';

import { resume } from '@/lib/constants';
import { SimpleIcon, siLinkedin, siTwitter } from '../common';

const getIcon = (social: string) => {
  switch (social) {
    case 'Youtube':
      return siYoutube;
    case 'Twitter':
      return siTwitter;
    case 'Github':
      return siGithub;
    case 'Instagram':
      return siInstagram;
    case 'Linkedin':
      return siLinkedin;
    case 'Buy Me A Coffee':
      return siBuymeacoffee;
    default:
      return null;
  }
};

export const SocialLinks = () => {
  return (
    <>
      {resume.basics.profiles
        .map((p) => ({ ...p, icon: getIcon(p.network) }))
        .filter((p) => p.icon !== null)
        .map((p) => (
          <SimpleIcon key={p.network} icon={p.icon!} />
        ))}
    </>
  );
};
