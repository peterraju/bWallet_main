"use client";

import { useState, useEffect } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logo from "../Logo";
import NavList from "./NavList";
import MobileNav from "./MobileNav";
import RippleButton from "../ui/RippleButton";

const MainNav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = [
    { name: "Home", href: "#", active: true },
    { name: "Features", href: "#", active: false },
    { name: "Contact Us", href: "#", active: false },
  ];

  return (
    <Navbar className="sticky top-0 z-40 h-max max-w-full rounded-none border-none bg-primary-black/40 px-4 py-2 shadow-none backdrop-blur-sm lg:px-8 lg:py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-gray-300">
        <Logo />

        <div className="mr-4 hidden lg:block">
          {/* <NavList list={navList} /> */}
        </div>

        <div className="flex items-center gap-4">
          <RippleButton
            style="hidden lg:flex border border-white"
            label="Launch App"
            location="/login"
            icon="default"
          />

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </IconButton>
        </div>
      </div>

      <MobileNav openNav={openNav} navList={navList} />
    </Navbar>
  );
};

export default MainNav;
