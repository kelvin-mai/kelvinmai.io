import { ExperienceCard } from './experience';
import { resume } from '@app/constants';

export const AboutSection = () => {
  console.log(
    new Date('2021-02-08T08:00:00.000Z').toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    })
  );
  return (
    <>
      <section className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-dracula-dark-purple to-dracula-black'>
        <a href='/api/pdf'>Download Resume</a>
        <div className='grid grid-cols-1 gap-4'>
          {resume.work.map(ExperienceCard)}
        </div>
      </section>
    </>
  );
};
