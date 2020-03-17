import { FluidObject } from 'gatsby-image';

export interface ImageData {
  childImageSharp: {
    fluid: FluidObject;
  };
}
