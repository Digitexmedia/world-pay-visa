import React from 'react';

export function Label({ htmlFor, children, className }) {
  return (
    <label htmlFor={htmlFor} className={`block font-medium mb-1 ${className}`}>
      {children}
    </label>
  );
}
