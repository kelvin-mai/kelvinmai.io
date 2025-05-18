/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from 'next/og';

import { resume, SITE_URL } from '@/lib/constants';
import { getBaseUrl } from '@/lib/utils';

export const runtime = 'edge';

const backgroundImage = `radial-gradient(
      at 30% 38%,
      hsla(189, 96%, 49%, 1) 0px,
      transparent 80%
    ),
    radial-gradient(at 13% 72%, hsla(151, 89%, 58%, 1) 0px, transparent 80%),
    radial-gradient(at 27% 92%, hsla(35, 88%, 73%, 1) 0px, transparent 80%),
    radial-gradient(at 77% 12%, hsla(325, 84%, 67%, 1) 0px, transparent 80%),
    radial-gradient(at 61% 21%, hsla(254, 79%, 74%, 1) 0px, transparent 80%),
    radial-gradient(at 43% 63%, hsla(355, 82%, 68%, 1) 0px, transparent 80%),
    radial-gradient(at 69% 69%, hsla(65, 95%, 73%, 1) 0px, transparent 80%)`
  .split('\n')
  .map((s) => s.trim())
  .join(' ');

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.has('title')
      ? searchParams.get('title')?.slice(0, 100)
      : '';
    const description = searchParams.has('description')
      ? searchParams.get('description')?.slice(0, 100)
      : '';

    const ubuntuFont = await fetch(
      new URL(`${getBaseUrl()}/fonts/Ubuntu-Regular.ttf`, import.meta.url),
    ).then((res) => res.arrayBuffer());

    const image = await fetch(
      new URL(`${getBaseUrl()}/images/me.jpg`, import.meta.url),
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: 'hsla(234, 25%, 17%, 1)',
            backgroundImage,
          }}
          tw='w-full h-full flex relative items-center justify-center text-white'
        >
          <div tw='flex gap-2 items-center absolute top-8 left-8'>
            <img
              width={64}
              height={64}
              src={image as unknown as Blob}
              tw='rounded-full overflow-hidden'
            />
            <div tw='flex flex-col ml-2'>
              <h1 tw='text-3xl m-0'>{resume.basics.name}</h1>
              <p tw='text-lg m-0'>{resume.basics.label}</p>
            </div>
          </div>
          {title && description ? (
            <div tw='p-8 flex flex-col'>
              <h2 tw='text-5xl m-0'>{title}</h2>
              <p tw='text-2xl m-0'>{description}</p>
            </div>
          ) : (
            <p tw='p-8 text-3xl'>{resume.basics.summary}</p>
          )}
          <p tw='absolute bottom-8 left-8'>{SITE_URL}</p>
        </div>
      ),
      {
        fonts: [{ name: 'Ubuntu', data: ubuntuFont, style: 'normal' }],
      },
    );
  } catch {
    return new Response('Failed to generate OG image', { status: 500 });
  }
}
