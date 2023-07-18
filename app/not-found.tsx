import Link from 'next/link';

import { BlueScreen } from '@app/components';
import { Button } from '@app/components/common';

export default function () {
  return (
    <BlueScreen description="Page Not Found. The route you were trying to reach doesn't exist.">
      <Button className='text-microsoft-blue bg-white shine'>
        <Link href='/'>Return home</Link>
      </Button>
    </BlueScreen>
  );
}
