import React from 'react';
import clsx from 'clsx';

export function Button({ children, className, ...props }) {
  return (
    <button
      className={clsx(
        'bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl transition-all duration-150 shadow',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
