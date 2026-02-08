// keyboard navigation
// click outside to close
// focus restoration
// body scroll prevention
// flexible content
// beautiful animations

import React, { useEffect, useRef } from "react";
import Portal from "../Portal/Portal";
import "./Modal.css";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
}) => {
  // Ref to modal content (for focusing)
  const modalRef = useRef(null);

  // Ref to store element focused before modal opened (for restoring focus)
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Save current focus before opening
    previousFocusRef.current = document.activeElement;

    // Focus the modal content so keyboard users are inside the modal
    if (modalRef.current) {
      modalRef.current.focus();
    }

    // Prevent background scrolling
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Cleanup when modal closes/unmounts
    return () => {
      document.body.style.overflow = previousOverflow || "unset";

      // Restore focus back to the element that was focused before modal opened
      if (previousFocusRef.current && previousFocusRef.current.focus) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    // Close only if user clicked the backdrop (outside the modal content)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const titleId = title ? "modal-title" : undefined;

  return (
    <Portal>
      <div
        className="modal-backdrop"
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        role="presentation"
      >
        <div
          ref={modalRef}
          className="modal-content"
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          {showCloseButton && (
            <button
              className="modal-close-button"
              onClick={onClose}
              aria-label="Close modal"
              type="button"
            >
              ×
            </button>
          )}

          {title && (
            <h2 id="modal-title" className="modal-title">
              {title}
            </h2>
          )}

          <div className="modal-body">{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;



