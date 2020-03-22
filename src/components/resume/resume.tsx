import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PDFExport } from '@progress/kendo-react-pdf';

import { ExternalLink } from '../external-link';
import { ResumeSection } from './resume-section';
import { ResumeProject } from './resume-project';
import { ResumeWork } from './resume-work';
import { ResumeSchool } from './resume-school';

const query = graphql`
  query {
    resume: allResumeJson {
      nodes {
        website
        email
        location
        skills {
          resume
        }
        projects {
          title
          link
          description
          date
        }
        education {
          date
          location
          school
          title
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
  resume: {
    nodes: {
      website: string;
      email: string;
      location: string;
      skills: {
        resume: string[];
      };
      projects: {
        id: string;
        title: string;
        description: string;
        link: string;
        date: string;
      }[];
      education: {
        id: string;
        school: string;
        title: string;
        location: string;
        date: string;
      }[];
      work: {
        id: string;
        company: string;
        date: string;
        title: string;
        description: string;
        location: string;
        points: string[];
      }[];
    }[];
  };
}

export const Resume = () => {
  const pdf = React.useRef<PDFExport>(null);
  const downloadPdf = () => {
    if (pdf.current) {
      pdf.current.save();
    }
  };
  const data: DataType = useStaticQuery(query);
  const [resume] = data.resume.nodes;
  return (
    <div className='pb-4'>
      <PDFExport
        paperSize='Letter'
        fileName='KelvinMaiResume.pdf'
        title='Kelvin mai'
        subject='Kelvin Mai'
        forcePageBreak='.page-break'
        ref={pdf}
      >
        <article className='resume-page mx-auto shadow-lg text-xs'>
          <h3 className='text-xl font-bold text-dark-purple'>Kelvin Mai</h3>
          <div className='flex justify-between'>
            <ExternalLink href={resume.website}>{resume.website}</ExternalLink>
            {' | '}
            <ExternalLink href={`mailto:${resume.email}`}>
              {resume.email}
            </ExternalLink>
            {' | '}
            <p>{resume.location}</p>
          </div>
          <p className='mt-2 text-justify'>
            <strong>Skills:</strong> {resume.skills.resume.join(', ')}
          </p>
          <ResumeSection title='Projects'>
            {resume.projects.map(project => (
              <ResumeProject key={project.id} {...project} />
            ))}
          </ResumeSection>
          <ResumeSection title='Work Experience'>
            {resume.work.map(job => (
              <ResumeWork key={job.id} {...job} />
            ))}
          </ResumeSection>
          <ResumeSection title='Education'>
            {resume.education.map(school => (
              <ResumeSchool key={school.id} {...school} />
            ))}
          </ResumeSection>
        </article>
      </PDFExport>
      <button
        className='block w-auto mx-auto mt-4 p-2 bg-dark-purple hover:bg-purple text-white shadow-xl rounded'
        onClick={downloadPdf}
      >
        Download Resume
      </button>
    </div>
  );
};
