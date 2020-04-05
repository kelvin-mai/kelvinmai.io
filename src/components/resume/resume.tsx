import React from 'react';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { PDFExport } from '@progress/kendo-react-pdf';

import { ResumeSection } from './resume-section';
import { ResumeWork } from './resume-work';
import { ResumeSchool } from './resume-school';
import { ResumeInfo } from './resume-info';

const query = graphql`
  query {
    resume: allResumeJson {
      nodes {
        basics {
          email
          label
          name
          summary
          url
          location {
            city
            countryCode
            region
          }
        }
        education {
          area
          startDate(formatString: "MMM YYYY")
          endDate(formatString: "MMM YYYY")
          institution
          location
        }
        work {
          startDate(formatString: "MMM YYYY")
          endDate(formatString: "MMM YYYY")
          highlights
          location
          name
          position
          summary
        }
      }
    }
  }
`;

interface DataType {
  resume: any;
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
    <motion.div
      className='pb-4'
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0 }}
      style={{ originY: 0 }}
    >
      <PDFExport
        paperSize='Letter'
        fileName='KelvinMaiResume.pdf'
        title='Kelvin mai'
        subject='Kelvin Mai'
        forcePageBreak='.page-break'
        ref={pdf}
      >
        <article className='resume-page mx-auto shadow-lg text-xs'>
          <ResumeInfo {...resume.basics} />
          <ResumeSection title='Work Experience'>
            {resume.work.map(job => (
              <ResumeWork key={job.name} {...job} />
            ))}
          </ResumeSection>
          <ResumeSection title='Education'>
            {resume.education.map(school => (
              <ResumeSchool key={school.institution} {...school} />
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
    </motion.div>
  );
};
