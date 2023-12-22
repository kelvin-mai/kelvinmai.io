'use client';
import { useEffect } from 'react';

import { BlueScreen } from '@app/components/layout';
import { Button } from '@app/components/ui';

export default function ErrorPage({
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
        <span className='text-xl font-bold'>
          {error.name} {error.digest}
        </span>
      </h1>
      <p>{error.message}</p>
      {error.stack && (
        <pre className='my-4 whitespace-pre-wrap rounded bg-slate-500 px-4 py-2 font-mono text-white'>
          {error.stack}
        </pre>
      )}
      <Button variant='azure' onClick={() => reset()}>
        Try again?
      </Button>
    </BlueScreen>
  );
}
