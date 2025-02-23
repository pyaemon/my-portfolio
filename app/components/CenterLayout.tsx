import * as React from 'react';

export default function CenteredLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center rounded px-4 py-2 my-4">
      {children}
    </div>
  );
}
