import React from 'react';
import icons from 'simple-icons';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon, IconProps } from './icon';

export interface SocialLinksProps extends Omit<IconProps, 'icon'> {
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  ...iconProps
}) => {
  const data = useStaticQuery(graphql`
    query {
      socialLinks: allSocialLinksJson {
        nodes {
          icon
          to
        }
      }
    }
  `);
  return (
    <div className={className}>
      {data.socialLinks.nodes.map(({ to, icon }) => (
        <a key={icon} href={to} target='_blank' rel='noopener noreferrer'>
          <Icon icon={icons.get(icon)} {...iconProps} />
        </a>
      ))}
    </div>
  );
};
