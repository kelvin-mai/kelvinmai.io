import { siBuymeacoffee, siGithub, siInstagram, siYoutube } from 'simple-icons';

import { resume } from '@/lib/constants';
import { ExternalLink, SimpleIcon, siLinkedin } from '../common';

const getIcon = (social: string) => {
  switch (social) {
    case 'Youtube':
      return siYoutube;
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
          <ExternalLink key={p.network} href={p.url}>
            <SimpleIcon icon={p.icon!} />
          </ExternalLink>
        ))}
    </>
  );
};
