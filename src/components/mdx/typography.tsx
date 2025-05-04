import React, { ComponentPropsWithoutRef } from "react";

export const H1: React.FC<ComponentPropsWithoutRef<"h1">> = ({ ...props }) => {
  return (
    <h1
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...props}
    />
  );
};

export const H2: React.FC<ComponentPropsWithoutRef<"h2">> = ({ ...props }) => {
  return (
    <h2
      className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  );
};

export const H3: React.FC<ComponentPropsWithoutRef<"h3">> = ({ ...props }) => {
  return (
    <h3
      className="scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  );
};

export const H4: React.FC<ComponentPropsWithoutRef<"h4">> = ({ ...props }) => {
  return (
    <h4
      className="scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    />
  );
};

export const H5: React.FC<ComponentPropsWithoutRef<"h5">> = ({ ...props }) => {
  return <h5 {...props} />;
};

export const H6: React.FC<ComponentPropsWithoutRef<"h6">> = ({ ...props }) => {
  return <h6 {...props} />;
};

export const P: React.FC<ComponentPropsWithoutRef<"p">> = ({ ...props }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />;
};

export const Blockquote: React.FC<ComponentPropsWithoutRef<"blockquote">> = ({
  ...props
}) => {
  return <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />;
};

export const UnorderedList: React.FC<ComponentPropsWithoutRef<"ul">> = ({
  ...props
}) => {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />;
};

export const OrderedList: React.FC<ComponentPropsWithoutRef<"ol">> = ({
  ...props
}) => {
  return <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />;
};
