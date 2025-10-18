import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Dropdown = ({ label, items }) => {
  const [selected, setSelected] = React.useState(label);

  return (
    <Menu>
      <MenuHandler>
        <Button
          variant="outlined"
          className="flex items-center justify-between gap-2 border-gray-600 border-2 text-gray-700 hover:border-gradient-violet focus:border-gradient-violet focus:ring-0 rounded-xl px-4 py-2 w-48"
        >
          {selected}
          <ChevronDownIcon className="h-4 w-4 text-gradient-violet" />
        </Button>
      </MenuHandler>

      <MenuList className="rounded-xl shadow-lg border border-gray-100">
        {items.map((item) => (
          <MenuItem
            key={item}
            onClick={() => setSelected(item)}
            className={`${
              selected === item ? "bg-violet-100 text-gradient-violet" : ""
            } rounded-lg`}
          >
            <Typography variant="small">{item}</Typography>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
