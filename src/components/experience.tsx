import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ExternalLink } from './external-link';

const query = graphql`
  query {
    experience: allResumeJson {
      nodes {
        projects {
          title
          link
          description
          date
        }
        work {
          company
          date
          description
          location
          points
          title
        }
      }
    }
  }
`;

interface DataType {
  experience: {
    nodes: {
      projects: {
        title: string;
        link: string;
        description: string;
        date: string;
      }[];
      work: {
        company: string;
        date: string;
        description: string;
        location: string;
        points: string[];
        title: string;
      }[];
    }[];
  };
}

export const Experience = () => {
  const data: DataType = useStaticQuery(query);
  const [resume] = data.experience.nodes;
  return (
    <div className='pb-8'>
      <div className='shadow-xl p-4 px-8'>
        <h2 className='text-center text-2xl uppercase text-dark-purple font-bold'>
          Experience
        </h2>
        <ul>
          {resume.projects.map(project => (
            <li className='pb-4'>
              <div className='flex justify-between'>
                <h3 className='text-lg font-bold'>
                  <ExternalLink href={project.link}>
                    {project.title}
                  </ExternalLink>
                </h3>
                <p>{project.date}</p>
              </div>
              <p>{project.description}</p>
            </li>
          ))}
          {resume.work.map(work => (
            <li className='pb-4'>
              <h3 className='text-lg font-bold'>{work.company}</h3>
              <p className='font-bold'>{work.title}</p>
              <div className='flex justify-between'>
                <p>{work.location}</p>
                <p>{work.date}</p>
              </div>
              <p>{work.description}</p>
              <ul className='list-disc list-inside'>
                {work.points.map(point => (
                  <li>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
