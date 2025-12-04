'use client';

// import { ServiceType } from '@/type/ServiceType';
import { createContext, useContext, useState } from 'react';

type ServiceModalContextType = {
  isOpenServiceModal: boolean;
  selectedService: ServiceType | null;
  openServiceModal: (service: ServiceType) => void;
  closeServiceModal: () => void;
};

const ServiceModalContext = createContext({} as ServiceModalContextType);

export function ServiceModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(
    null
  );
  function openServiceModal(service: ServiceType) {
    setSelectedService(service);
    setIsOpen(true);
  }

  function closeServiceModal() {
    setIsOpen(false);
    setSelectedService(null);
  }

  return (
    <ServiceModalContext.Provider
      value={{
        isOpenServiceModal: isOpen,
        selectedService,
        openServiceModal,
        closeServiceModal,
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
