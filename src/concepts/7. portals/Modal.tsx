import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

// Define the props for the Modal component
interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  // Check if document exists and if modal-root is present in the DOM

  return ReactDOM.createPortal(
    <div style={modalStyles}>
      <div style={overlayStyles} onClick={onClose} />
      <div className="bg-slate-400/60 border rounded-md" style={contentStyles}>
        {children}
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>,
    document.body
  );
};

// Define CSS-in-JS styles
const modalStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const overlayStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
};

const contentStyles: React.CSSProperties = {
  background: "white",
  padding: "20px",
  zIndex: 1000,
};

export default Modal;
