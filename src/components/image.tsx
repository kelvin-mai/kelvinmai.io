import React from 'react';
import classnames from 'classnames';
import GatsbyImage, { FluidObject } from 'gatsby-image';

interface Props {
  className?: string;
  imageSrc: FluidObject;
}

export const Img: React.FC<Props> = ({ className, imageSrc }) => (
  <div className={classnames(className, 'overflow-hidden mx-auto')}>
    <GatsbyImage fluid={imageSrc} />
  </div>
);
