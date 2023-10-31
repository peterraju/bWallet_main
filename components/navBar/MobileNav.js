import { Collapse } from "@material-tailwind/react";

import NavList from "./NavList";
import RippleButton from "../ui/RippleButton";

const MobileNav = ({ openNav, navList }) => {
  return (
    <Collapse open={openNav}>
      <NavList list={navList} />

      <RippleButton
        style="flex border border-white"
        label="Launch App"
        location="/login"
        icon="default"
      />
    </Collapse>
  );
};
export default MobileNav;
