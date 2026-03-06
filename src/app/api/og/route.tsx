/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from 'next/og';

import { resume, SITE_URL } from '@/lib/constants';
import { getBaseUrl } from '@/lib/utils';

export const runtime = 'edge';

const backgroundImage = `radial-gradient(
      at 25% 35%,
      hsla(193, 97%, 49%, 0.5) 0px,
      transparent 50%
    ),
    radial-gradient(at 75% 15%, hsla(254, 84%, 75%, 0.5) 0px, transparent 80%),
    radial-gradient(at 10% 70%, hsla(151, 90%, 58%, 0.5) 0px, transparent 80%),
    radial-gradient(at 80% 70%, hsla(356, 82%, 68%, 0.5) 0px, transparent 80%),
    radial-gradient(at 50% 55%, hsla(35, 89%, 73%, 0.5) 0px, transparent 85%)`
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
      ? searchParams.get('description')?.slice(0, 150)
      : '';
    const previewImage = searchParams.get('image');

    const ubuntuFont = await fetch(
      `${getBaseUrl()}/fonts/Ubuntu-Regular.ttf`,
    ).then((res) => res.arrayBuffer());

    const avatar = await fetch(`${getBaseUrl()}/images/me.jpg`).then((res) =>
      res.arrayBuffer(),
    );

    const previewImageData = previewImage
      ? await fetch(
          previewImage.startsWith('/')
            ? `${getBaseUrl()}${previewImage}`
            : previewImage,
        )
          .then((res) => res.arrayBuffer())
          .catch(() => null)
      : null;

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
              src={avatar as unknown as Blob}
              tw='rounded-full overflow-hidden'
            />
            <div tw='flex flex-col ml-2'>
              <h1 tw='text-3xl m-0'>{resume.basics.name}</h1>
              <p tw='text-lg m-0'>{resume.basics.label}</p>
            </div>
          </div>
          {title && description ? (
            previewImageData ? (
              <div tw='flex flex-row w-full h-full pt-24 pb-12 px-8 gap-8 items-center'>
                <div tw='flex flex-col flex-1 justify-center'>
                  <h2 tw='text-5xl m-0 mb-4 leading-tight'>{title}</h2>
                  <p tw='text-xl m-0 opacity-70 leading-relaxed'>
                    {description}
                  </p>
                </div>
                <img
                  src={previewImageData as unknown as Blob}
                  width={480}
                  height={320}
                  tw='rounded-2xl object-cover flex-shrink-0'
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ) : (
              <div tw='p-8 flex flex-col'>
                <h2 tw='text-5xl m-0'>{title}</h2>
                <p tw='text-2xl m-0'>{description}</p>
              </div>
            )
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
