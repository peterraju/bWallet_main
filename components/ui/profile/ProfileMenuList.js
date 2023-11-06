import {
  ArrowLeftOnRectangleIcon,
  Cog8ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { MenuList } from "@material-tailwind/react";

import ProfileMenuItem from "./ProfileMenuItem";

const ProfileMenuList = () => {
  return (
    <MenuList className="border-gray-500 bg-gray-900">
      <ProfileMenuItem
        href="tlBank/profile"
        label="My Profile"
        icon={<UserCircleIcon className="h-4 w-4 text-white" />}
      />

      <ProfileMenuItem
        href="tlBank/settings"
        label="Edit Profile"
        icon={<Cog8ToothIcon className="h-4 w-4 text-white" />}
      />

      <hr className="my-2 border-gray-500" />

      <ProfileMenuItem
        href="/"
        label="Sign Out"
        icon={<ArrowLeftOnRectangleIcon className="h-4 w-4 text-white" />}
      />
    </MenuList>
  );
};

export default ProfileMenuList;
