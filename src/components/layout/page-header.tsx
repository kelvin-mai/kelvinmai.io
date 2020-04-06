import React from 'react';
import classnames from 'classnames';

interface Props {
  title: string;
  subtitle: string;
  className?: string;
}

export const PageHeader: React.FC<Props> = ({
  title,
  subtitle,
  className = '',
}) => (
  <div className={classnames('text-center', className)}>
    <h2 className='text-3xl sm:text-5xl'>{title}</h2>
    <p className='text-xl pb-2 capitalize'>{subtitle}</p>
  </div>
);
