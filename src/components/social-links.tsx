import React from 'react';
import icons from 'simple-icons';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon, IconProps } from './icon';

export interface SocialLinksProps extends Omit<IconProps, 'icon'> {
  className?: string;
}

const query = graphql`
  query {
    socialLinks: allResumeJson {
      nodes {
        basics {
          profiles {
            url
            network
          }
        }
      }
    }
  }
`;

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  ...iconProps
}) => {
  const data = useStaticQuery(query);
  const links = data.socialLinks.nodes[0].basics.profiles;
  return (
    <div className={className}>
      {links.map(({ url, network }) => (
        <a key={network} href={url} target='_blank' rel='noopener noreferrer'>
          <Icon icon={icons.get(network)} {...iconProps} />
        </a>
      ))}
    </div>
  );
};
