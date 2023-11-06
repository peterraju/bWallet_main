"use client";

import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Menu, MenuHandler } from "@material-tailwind/react";

import ProfileMenuList from "./ProfileMenuList";

const ProfileMenu = () => {
  return (
    <Menu
      className="bg-gray-800"
      placement="top-start"
      animate={{
        mount: { y: 5 },
        unmount: { y: -25 },
      }}
    >
      <MenuHandler>
        <div className="flex items-center gap-1">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/logo.svg"
              priority={true}
              width={32}
              height={32}
              alt="logo"
              className="object-contain"
            />
          </div>

          <ChevronDownIcon className="h-4 w-4 text-white" />
        </div>
      </MenuHandler>

      <ProfileMenuList />
    </Menu>
  );
};

export default ProfileMenu;
