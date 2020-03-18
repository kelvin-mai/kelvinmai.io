import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { ExperienceProject } from './experience-project';
import { ExperienceWork } from './experience-work';

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
        id: string;
        title: string;
        link: string;
        description: string;
        date: string;
      }[];
      work: {
        id: string;
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
            <ExperienceProject key={project.id} {...project} />
          ))}
          {resume.work.map(work => (
            <ExperienceWork key={work.id} {...work} />
          ))}
        </ul>
      </div>
    </div>
  );
};
