import { Collapse } from "@material-tailwind/react";

import NavList from "./NavList";
import { LaunchAppBtn } from "../ui/ClientButtons";

const MobileNav = ({ openNav, navList }) => {
  return (
    <Collapse open={openNav}>
      <NavList list={navList} />

      <LaunchAppBtn isDefault={true} screen="sm" />
    </Collapse>
  );
};
export default MobileNav;
