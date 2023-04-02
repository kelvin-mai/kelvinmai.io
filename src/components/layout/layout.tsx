import { SEOHead, Footer } from '.';

export interface LayoutProps extends React.PropsWithChildren {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <SEOHead title={title} />
      {children}
      <Footer />
    </>
  );
};
