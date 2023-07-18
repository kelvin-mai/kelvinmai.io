import { PropsWithChildren } from 'react';

export interface BlueScreenProps extends PropsWithChildren {
  description: string;
}

export const BlueScreen: React.FC<BlueScreenProps> = ({
  description,
  children,
}) => (
  <section className='h-screen w-full bg-microsoft-blue text-white flex justify-center items-center'>
    <div className='container'>
      <h1 className='text-6xl sm:text-8xl mb-8'>:(</h1>
      <p className='text-2xl sm:text-4xl'>{description}</p>
      <div className='mt-8'>{children}</div>
    </div>
  </section>
);
