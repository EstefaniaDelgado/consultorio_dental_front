import React, { useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const AccordionCustomIcon = ({ menuItems }) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    const handleClickOut = (e) => {
      if (!e.target.closest(".custom-accordion")) {
        setOpen(0);
      }
    };

    document.addEventListener("click", handleClickOut);

    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, []);

  return (
    <div className="my-2">
      {menuItems.map(({ name, options }, id) => {
        return (
          <Accordion
            key={name}
            open={open === id + 1}
            icon={<Icon id={id + 1} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(id + 1)}
              className="py-2 border-none text-base text-spacecadet dark:text-gray-200 custom-accordion font-poppins"
            >
              {name}
            </AccordionHeader>
            <AccordionBody className="py-0">
              {options.map(({ name, link }, id) => (
                <Typography
                  key={name + id}
                  as="a"
                  href={link}
                  variant="paragraph"
                  className="text-spacecadet dark:text-gray-200 py-1 text-sm font-poppins"
                >
                  {name}
                </Typography>
              ))}
            </AccordionBody>
          </Accordion>
        );
      })}
    </div>
  );
};

export default AccordionCustomIcon;
