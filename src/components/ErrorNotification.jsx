import React, { useState, useEffect } from 'react';

const ErrorNotification = ({ message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // La notificación desaparece después de 3 segundos

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <>
      {visible && (
        <div className="fixed top-5 right-5 z-50 w-72 max-w-full bg-white text-black border-red-600 border-2 rounded-lg shadow-lg p-4 animate-slideInRight">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 5.636L5.636 18.364M5.636 5.636l12.728 12.728"
                ></path>
              </svg>
              <p>{message}</p>
            </div>
            <button
              className="text-white font-bold"
              onClick={onClose}
            >
              &times;
            </button>
              {/* Barra de progreso en el borde inferior */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600">
            <div className="h-full bg-red-400 animate-progressBar"></div>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorNotification;
