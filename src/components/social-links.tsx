import React from 'react';
import icons from 'simple-icons';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon, IconProps } from './icon';

export interface SocialLinksProps extends Omit<IconProps, 'icon'> {
  className?: string;
}

const query = graphql`
  query {
    socialLinks: allSocialLinksJson {
      nodes {
        icon
        to
      }
    }
  }
`;

interface DataType {
  socialLinks: {
    nodes: {
      icon: string;
      to: string;
    }[];
  };
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  ...iconProps
}) => {
  const {
    socialLinks: { nodes: links },
  }: DataType = useStaticQuery(query);
  return (
    <div className={className}>
      {links.map(({ to, icon }) => (
        <a key={icon} href={to} target='_blank' rel='noopener noreferrer'>
          <Icon icon={icons.get(icon)} {...iconProps} />
        </a>
      ))}
    </div>
  );
};
