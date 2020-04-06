import React from 'react';
import classnames from 'classnames';

interface Props {
  className?: string;
}

export const Section: React.FC<Props> = ({ children, className }) => (
  <section className={classnames('py-4', className)}>
    <div className='container'>{children}</div>
  </section>
);
