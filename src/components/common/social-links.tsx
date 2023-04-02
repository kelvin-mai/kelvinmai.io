import { socialLinks } from '@app/constants';
import { Icon } from '@app/components/common';

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
