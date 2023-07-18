import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

export const buttonClassName = 'rounded-md px-4 py-2 drop-shadow';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  const buttonType = props.type || 'button';
  const finalClassName = classNames(
    buttonClassName,
    className,
    props.disabled && 'opacity-75',
  );
  return (
    <button className={finalClassName} type={buttonType} {...props}>
      {children}
    </button>
  );
};
