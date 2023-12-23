export type BlueScreenProps = React.PropsWithChildren & {
  description: string;
};

export const BlueScreen: React.FC<BlueScreenProps> = ({
  description,
  children,
}) => (
  <section className='flex min-h-screen w-full items-center justify-center bg-azure-700 text-white'>
    <div className='container'>
      <h1 className='mb-8 text-6xl sm:text-8xl'>:(</h1>
      <p className='text-2xl sm:text-4xl'>{description}</p>
      <div className='mt-8'>{children}</div>
    </div>
  </section>
);
