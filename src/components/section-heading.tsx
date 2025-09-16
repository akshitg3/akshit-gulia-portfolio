import React, { forwardRef } from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = forwardRef<HTMLHeadingElement, SectionHeadingProps>(
  ({ children }, ref) => {
    return (
      <h2 ref={ref} className="text-3xl font-medium capitalize mb-8 text-center">
        {children}
      </h2>
    );
  }
);

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;
