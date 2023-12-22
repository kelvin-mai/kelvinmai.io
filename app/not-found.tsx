import Link from 'next/link';

import { BlueScreen } from '@app/components/layout';
import { Button } from '@app/components/ui';

export default function () {
  return (
    <BlueScreen description="Page Not Found. The route you were trying to reach doesn't exist.">
      <Link href='/'>
        <Button variant='azure'>Return home</Button>
      </Link>
    </BlueScreen>
  );
}
