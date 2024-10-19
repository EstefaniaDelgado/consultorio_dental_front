import { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const MenuCustomList = ({ name, options }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const renderItems = () => {
    return options.map((item, index) => (
      <MenuItem key={index} className="dark:hover:bg-richblack">
        <Typography
          as="a"
          href={item.link}
          variant="paragraph"
          className="flex items-center gap-2 text-spacecadet font-normal dark:text-white font-poppins"
        >
          {item.name}
        </Typography>
      </MenuItem>
    ));
  };

  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-3 text-base font-normal capitalize tracking-normal outline-none dark:text-white text-spacecadet font-poppins px-3"
        >
          {name}{" "}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="grid lg:grid grid-cols-1 gap-3 overflow-visible dark:bg-spacecadet dark:border-none">
        <ul className="flex w-full flex-col gap-1 outline-none">
          {renderItems()}
        </ul>
      </MenuList>
    </Menu>
  );
};

export default MenuCustomList;
