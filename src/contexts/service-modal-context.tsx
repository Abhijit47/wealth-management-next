'use client';

import { createContext, useContext, useState } from 'react';

type ServiceModalContextType = {
  isOpenServiceModal: boolean;
  onToggleServiceModal: () => void;
};

const ServiceModalContext = createContext({} as ServiceModalContextType);

export function ServiceModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDialog() {
    setIsOpen((prev) => !prev);
  }

  return (
    <ServiceModalContext.Provider
      value={{
        isOpenServiceModal: isOpen,
        onToggleServiceModal: toggleDialog,
      }}>
      {children}
    </ServiceModalContext.Provider>
  );
}

export function useServiceModal() {
  const context = useContext(ServiceModalContext);
  if (context === undefined) {
    throw new Error(
      'useServiceModal must be used within a ServiceModalProvider'
    );
  }
  return context;
}
