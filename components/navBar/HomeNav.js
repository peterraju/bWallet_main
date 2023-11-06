import MainNav from "./MainNav";
import { LaunchAppBtn } from "@/components/ui/ClientButtons";

const HomeNav = () => {
  const navList = [
    { name: "Home", href: "#", active: true },
    { name: "Features", href: "#", active: false },
    { name: "Contact Us", href: "#", active: false },
  ];

  return (
    <MainNav
      style="bg-primary-black/40 shadow-white/5 backdrop-blur-sm md:shadow-none"
      navList={navList}
      btn={<LaunchAppBtn isDefault={true} screen="lg" />}
      mobileBtn={<LaunchAppBtn isDefault={true} screen="sm" />}
    />
  );
};

export default HomeNav;
