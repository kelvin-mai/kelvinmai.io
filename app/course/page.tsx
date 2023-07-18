import { CourseCard } from '@app/components/course';
import { getBaseUrl } from '@app/utils';

export default async function () {
  const response = await fetch(`${getBaseUrl()}/api/course`);
  const data = await response.json();
  return (
    <main className='bg-dracula-dark'>
      <div className='container'>
        <h1 className='py-4 text-3xl font-bold text-dracula-white text-center'>
          Courses
        </h1>
        <ul className='grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4'>
          {data.courses.map((c: any) => (
            <CourseCard key={c.pid} {...c} />
          ))}
        </ul>
      </div>
    </main>
  );
}
