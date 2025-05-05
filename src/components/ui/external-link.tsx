import * as React from "react";
import Link from "next/link";

export const ExternalLink: React.FC<React.ComponentPropsWithoutRef<"a">> = ({
  href,
  children,
  ...props
}) => {
  const className = "";
  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }
  if (href?.startsWith("#")) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};
