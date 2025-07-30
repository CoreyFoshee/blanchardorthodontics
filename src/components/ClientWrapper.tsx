'use client';

import React from 'react';
import { CMSProvider } from './CMSProvider';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  return (
    <CMSProvider>
      {children}
    </CMSProvider>
  );
}; 