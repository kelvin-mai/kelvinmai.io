'use client';
import { useEffect } from 'react';

import { BlueScreen } from '@app/components';
import { Button } from '@app/components/common';

export default function ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    console.log({
      name: error.name,
      digest: error.digest,
      cause: error.cause,
      message: error.message,
      stack: error.stack,
    });
  }, [error]);
  return (
    <BlueScreen description='Something went wrong.'>
      <h1>
        <span className='font-bold text-xl'>
          {error.name} {error.digest}
        </span>
      </h1>
      <p>{error.message}</p>
      {error.stack && (
        <pre className='font-mono bg-dracula-black text-dracula-white whitespace-pre-wrap py-2 px-4 my-4 rounded'>
          {error.stack}
        </pre>
      )}
      <Button
        className='text-microsoft-blue bg-white shine'
        onClick={() => reset()}
      >
        Try again?
      </Button>
    </BlueScreen>
  );
}
