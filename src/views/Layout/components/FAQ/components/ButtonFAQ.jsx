import React from "react";

const ButtonFAQ = () => {
  return (
    <button className="flex items-center gap-2 p-3 rounded-xl border border-robineggblue bg-white text-spacecadet dark:text-robineggblue dark:border-spacecadet dark:bg-gradient-to-r from-spacecadet to-spacecadetlow overflow-hidden mx-auto my-4">
      <p className="transform translate-x-4 text-lg font-bold transition-transform duration-300">
        Descubre más
      </p>
      <p className="transform translate-y-9 transition-transform duration-300">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </p>
      <style>{`
        button:hover .transform {
          transform: translateX(0px);
        }
        button:hover .transform:last-child {
          transform: translateY(0px);
        }
      `}</style>
    </button>
  );
};

export default ButtonFAQ;
