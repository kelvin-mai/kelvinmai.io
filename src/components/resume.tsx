import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PDFExport } from '@progress/kendo-react-pdf';

import { ExternalLink } from './external-link';

const query = graphql`
  query {
    resume: allResumeJson {
      nodes {
        website
        email
        location
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

export const Resume = () => {
  const pdf = React.useRef<PDFExport>(null);
  const downloadPdf = () => {
    if (pdf.current) {
      pdf.current.save();
    }
  };
  const data = useStaticQuery(query);
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
          <section className='mt-2'>
            <h4 className='text-dark-purple text-base'>Projects</h4>
            <hr />
            {resume.projects.map(project => (
              <div key={project.id} className='mt-2'>
                <div className='flex justify-between font-bold'>
                  <p>
                    <ExternalLink href={`mailto:${resume.email}`}>
                      {project.title}
                    </ExternalLink>
                  </p>
                  <p>{project.date}</p>
                </div>
                <p>{project.description}</p>
              </div>
            ))}
          </section>
          <section className='mt-2'>
            <h4 className='text-dark-purple text-base'>Work Experience</h4>
            <hr />
            {resume.work.map(job => (
              <div key={job.id} className='mt-1'>
                <div className='flex justify-between font-bold'>
                  <p>{job.company}</p>
                  <p>{job.location}</p>
                </div>
                <div className='flex justify-between'>
                  <p>
                    <i>{job.title}</i>
                  </p>
                  <p>{job.date}</p>
                </div>
                <p className='mt-1'>{job.description}</p>
                <ul className='list-disc list-inside'>
                  {job.points.map(p => (
                    <li key={p.id}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section className='mt-2'>
            <h4 className='text-dark-purple text-base'>Education</h4>
            <hr />
            {resume.education.map(school => (
              <div key={school.id} className='mt-1'>
                <div className='flex justify-between font-bold'>
                  <p>{school.school}</p>
                  <p>{school.location}</p>
                </div>
                <div className='flex justify-between'>
                  <p>
                    <i>{school.title}</i>
                  </p>
                  <p>{school.date}</p>
                </div>
              </div>
            ))}
          </section>
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
