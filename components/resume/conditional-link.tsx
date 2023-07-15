import { Link } from '@react-pdf/renderer';

export interface ConditionalLinkProps extends React.PropsWithChildren {
  url?: string | null;
}

export const ConditionalLink: React.FC<ConditionalLinkProps> = ({
  children,
  url,
}) =>
  url ? (
    <Link src={url} style={{ textDecoration: 'none', color: 'black' }}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
