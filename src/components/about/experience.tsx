import React from 'react';
import { motion } from 'framer-motion';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    resume: allResumeJson {
      nodes {
        work {
          name
          location
          position
          summary
          highlights
          image
        }
      }
    }
    images: allFile(filter: { relativeDirectory: { eq: "jobs" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
        relativePath
      }
    }
  }
`;

export const Experience = () => {
  const data = useStaticQuery(query);
  const [resume] = data.resume.nodes;
  console.log(
    resume.work.map(work => ({
      ...work,
      image: data.images.nodes.find(
        image => image.relativePath === `jobs/${work.image}`
      ),
    }))
  );
  return (
    <motion.div>
      <h2 className='text-xl text-dark-purple text-center font-bold'>
        Employment
      </h2>
      {resume.work
        .map(work => ({
          ...work,
          image: data.images.nodes.find(
            image => image.relativePath === `jobs/${work.image}`
          ),
        }))
        .map(({ name, position, summary, highlights, image }) => (
          <div key={name} className='shadow-md my-4 p-2 bg-real-white'>
            <div className='flex'>
              <div className='w-16'>
                <Img fluid={image.childImageSharp.fluid} />
              </div>
              <div className='ml-4'>
                <h3 className='text-lg text-dark-purple font-bold'>{name}</h3>
                <p className='text-dark-purple'>{position}</p>
              </div>
            </div>
            <p>{summary}</p>
            <ul className='list-disc list-inside'>
              {highlights.map(highlight => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
    </motion.div>
  );
};
