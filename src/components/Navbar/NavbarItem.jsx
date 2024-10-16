import { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import MenuCustomList from "./components/MenuCustomList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import AccordionCustomIcon from "./components/AcordionCustomIcon";

const menuItems = [
  {
    name: "Turnos",
    options: [
      {
        name: "Listar",
        link: "/listar-turnos",
      },
    ],
  },
  {
    name: "Pacientes",
    options: [
      {
        name: "Registrar",
        link: "/pacientes",
      },
      {
        name: "Listar",
        link: "/listar-pacientes",
      },
    ],
  },
  {
    name: "Odontólogos",
    options: [
      {
        name: "Registrar",
        link: "/odontologos",
      },
      {
        name: "Listar",
        link: "/listar-odontologos",
      },
    ],
  },
];

const NavbarItem = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth <= 960 && setOpenNav(false)
    );
  }, []);

  const renderList = () => {
    return (
      <ul className="mt-2 mb-4 flex flex-col justify-between gap-2 lg:w-full lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {menuItems.map(({ name, options }) => (
          <li key={name}>
            <MenuCustomList
              key={`item-path-${name}`}
              name={name}
              options={options}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Navbar className="bg-aliceblue dark:bg-yankeesblue mx-auto max-w-screen-xl px-4 py-2 shadow-none lg:px-8 lg:py-4 sticky top-0 z-50 rounded-t-none dark:border-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to={"/"}>
          <Typography className="text-spacecadet dark:text-white text-2xl md:text-4xl font-extrabold">
            DENTAL
            <strong className="text-robineggblue font-extrabold">CARE</strong>
          </Typography>
        </Link>

        <div className="hidden lg:block w-1/2 max-w-[500px]  ">
          {renderList()}
        </div>
        <ThemeSwitcher customStyles="hidden lg:inline-block p-2.5 rounded-xl" />
        <div className="hidden lg:flex items-center gap-x-1">
          <button className="hidden lg:inline-block text-spacecadet dark:text-robineggblue dark:bg-gradient-to-r from-spacecadet to-spacecadetlow px-3 py-2 rounded-xl border bg-white border-robineggblue">
            <Link to={"/turnos"}>Saca Tu Turno</Link>
          </button>
        </div>
        <div className="flex gap-2 items-center lg:hidden">
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
          <ThemeSwitcher customStyles="p-1.5 rounded-lg" />
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto text-black">
          <AccordionCustomIcon menuItems={menuItems} />
          <div className="flex items-center gap-x-1">
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              className="bg-spacecadetlow text-robineggblue"
            >
              <Link to={"/turnos"}>
                {" "}
                <span>Sacar turno!</span>
              </Link>
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarItem;
