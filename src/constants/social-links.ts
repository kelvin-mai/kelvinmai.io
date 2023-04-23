import {
  siYoutube,
  siTwitter,
  siInstagram,
  siGithub,
  siBuymeacoffee,
  siLinkedin,
  SimpleIcon,
} from 'simple-icons';

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
