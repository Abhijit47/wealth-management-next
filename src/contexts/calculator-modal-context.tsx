'use client';

import { createContext, useContext, useState } from 'react';

type CalculatorModalContextType = {
  isOpenCalculatorModal: boolean;
  selectedCalculator: CalculatorType | null;
  openCalculatorModal: (calculator: CalculatorType) => void;
  closeCalculatorModal: () => void;
};

const CalculatorModalContext = createContext({} as CalculatorModalContextType);

export function CalculatorModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCalculator, setSelectedCalculator] =
    useState<CalculatorType | null>(null);

  function openCalculatorModal(calculator: CalculatorType) {
    setSelectedCalculator(calculator);
    setIsOpen(true);
  }

  function closeCalculatorModal() {
    setIsOpen(false);
    setSelectedCalculator(null);
  }

  return (
    <CalculatorModalContext.Provider
      value={{
        isOpenCalculatorModal: isOpen,
        selectedCalculator,
        openCalculatorModal,
        closeCalculatorModal,
      }}>
      {children}
    </CalculatorModalContext.Provider>
  );
}

export function useCalculatorModal() {
  const context = useContext(CalculatorModalContext);
  if (context === undefined) {
    throw new Error(
      'useCalculatorModal must be used within a CalculatorModalProvider'
    );
  }
  return context;
}
