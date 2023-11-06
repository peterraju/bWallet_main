import Link from "next/link";
import { MenuItem } from "@material-tailwind/react";

const ProfileMenuItem = ({ icon, href, label }) => {
  return (
    <MenuItem className="flex items-center gap-2 hover:bg-gray-800 active:bg-gray-800">
      {icon || null}

      <Link href={href} className="text-white">
        {label}
      </Link>
    </MenuItem>
  );
};

export default ProfileMenuItem;
