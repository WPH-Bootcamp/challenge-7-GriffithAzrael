import React from 'react';

export interface ModalOverlayProps {
  children: React.ReactNode;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-[999] grid place-items-center bg-black/80">
      {children}
    </div>
  );
};

export default ModalOverlay;