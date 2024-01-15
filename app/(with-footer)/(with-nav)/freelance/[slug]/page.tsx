import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselControls,
} from '@app/components/ui';
import { freelance } from '@app/constants/freelance';

type FreelancePageProps = {
  params: { slug: string };
};
export async function generateStaticParams() {
  return freelance.map((f) => ({
    slug: f.slug,
  }));
}

export default function FreelancePage({ params }: FreelancePageProps) {
  const { slug, title, subtitle, description, images } = freelance.find(
    (f) => f.slug === params.slug,
  )!;

  const imageSources = [...Array(images)]
    .map((_, i) => i + 1)
    .map((n) => `/images/freelance/${slug}/image_${n}.png`);

  return (
    <main className='h-screen from-waikawa-700 to-waikawa-950 py-4 dark:bg-gradient-to-b'>
      <div className='container mb-4'>
        <div className='dark:to-bg-waikawa-950/40 flex flex-col justify-around gap-2 rounded-lg bg-gradient-to-br from-perfume-400 to-perfume-600 p-4 text-slate-50 shadow-md'>
          <h1 className='text-center text-5xl font-bold tracking-tight md:text-[4rem]'>
            {title}
          </h1>
          <p className='text-center text-2xl font-bold tracking-tight md:text-[2rem]'>
            {subtitle}
          </p>
          <p>{description}</p>
        </div>
      </div>
      <div className='container grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className='overflow-hidden rounded-lg shadow-md'>
          <Image
            src={`/images/freelance/${slug}/thumbnail.jpg`}
            width={1920}
            height={1440}
            alt={`${title} thumbnail`}
          />
        </div>
        <Carousel orientation='horizontal'>
          <CarouselContent>
            {imageSources.map((src, key) => (
              <CarouselItem key={key}>
                <Image
                  src={src}
                  width={690}
                  height={518}
                  alt={`${title} image ${key}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {images > 1 && <CarouselControls />}
        </Carousel>
      </div>
    </main>
  );
}
