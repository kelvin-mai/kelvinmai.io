import {
  siYoutube,
  siTwitter,
  siInstagram,
  siGithub,
  siBuymeacoffee,
  siLinkedin,
  type SimpleIcon,
} from 'simple-icons';

import { Icon } from './common';

export interface SocialLink {
  network: string;
  url: string;
  username: string;
  icon: SimpleIcon;
}

export const socialLinks: SocialLink[] = [
  {
    network: 'Youtube',
    url: 'https://youtube.com/c/kelvinmai',
    username: 'kelvinmai',
    icon: siYoutube,
  },
  {
    network: 'Github',
    url: 'https://github.com/kelvin-mai',
    username: 'kelvinmai',
    icon: siGithub,
  },
  {
    network: 'Twitter',
    url: 'https://twitter.com/kelvinmai',
    username: 'kelvinmai',
    icon: siTwitter,
  },
  {
    network: 'Linkedin',
    url: 'https://www.linkedin.com/in/kelvin-mai-461756152/',
    username: 'Kelvin Mai',
    icon: siLinkedin,
  },
  {
    network: 'Instagram',
    url: 'https://instagram.com/iamnivlek',
    username: 'iamnivlek',
    icon: siInstagram,
  },
  {
    network: 'Buy Me A Coffee',
    url: 'https://www.buymeacoffee.com/kelvinmai',
    username: 'kelvinmai',
    icon: siBuymeacoffee,
  },
];

export interface SocialLinksProps {
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = 'text-white',
}) => {
  return (
    <div className={className}>
      {socialLinks.map(({ url, network, icon }) => (
        <a key={network} href={url} target='_blank' rel='noopener noreferrer'>
          <Icon icon={icon} />
        </a>
      ))}
    </div>
  );
};
