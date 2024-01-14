import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@app/lib/utils';

const buttonVariants = cva(
  `inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-slate-50 transition-colors
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-perfume-950 focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-75 dark:ring-offset-perfume-950 dark:focus-visible:ring-perfume-300`,
  {
    variants: {
      variant: {
        default: `bg-gradient-to-br from-perfume-400 to-perfume-600 text-slate-50
                  hover:from-perfume-500 hover:to-perfume-700
                  active:from-perfume-600 active:to-perfume-800`,
        destructive: `bg-gradient-to-br from-rose-400 to-rose-600 text-slate-50
                      hover:from-rose-500 hover:to-rose-700
                      active:from-rose-600 active:to-rose-800`,
        outline: `border border-perfume-700 bg-slate-50 text-perfume-700
                  hover:bg-perfume-50 active:bg-perfume-100`,
        glass:
          'border border-slate-50 bg-waikawa-950/50 text-slate-50 disabled:opacity-50',
        azure: 'bg-azure-100 text-azure-900 hover:bg-azure-100/80',
        link: 'text-perfume-900 underline-offset-4 hover:underline dark:text-perfume-50',
      },
      size: {
        sm: 'rounded-md px-4 py-2 drop-shadow',
        lg: 'rounded-md px-8 py-4 drop-shadow',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
