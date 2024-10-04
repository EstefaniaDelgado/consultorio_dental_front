import { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CustomDropdown from "./components/CustomDropdown";
import MenuCustomList from "./components/MenuCustomList";

const menuItems = [
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
    name: "Odontologos",
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
    return menuItems.map((item) => (
      <MenuCustomList
        key={`item-path-${item.name}`}
        name={item.name}
        options={item.options}
      />
    ));
  };

  const navList = (
    <ul className="mt-2 mb-4  flex flex-col justify-between gap-2 lg:w-full lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium "
      >
        {" "}
        <Link to={"/"} className="flex items-center text-spacecadet">
          Home
        </Link>
      </Typography>
      {renderList()}
    </ul>
  );

  return (
    <Navbar className="bg-aliceblue mx-auto max-w-screen-xl px-4 py-2 shadow-none lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to={"/"} className="w-40">
          <Typography className="text-spacecadet text-xl font-extrabold">
            DENTAL<strong className="text-robineggblue font-bold">CARE</strong>
          </Typography>
        </Link>

        <div className="hidden lg:block w-1/2 max-w-[500px]  ">{navList}</div>
        <div className="flex items-center gap-x-1">
          <button
            // size="sm"
            className="hidden lg:inline-block text-robineggblue bg-gradient-to-r from-spacecadet to-spacecadetlow px-3 py-2 rounded-lg"
          >
            <Link to={"/turnos"}>Saca Tu Turno</Link>
          </button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto text-black">
          {navList}
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
