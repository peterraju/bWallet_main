import MainNav from "./MainNav";
import { LaunchAppBtn } from "@/components/ui/ClientButtons";
import ProfileAvatar from "../ui/profile/ProfileAvatar";

const TlBankNav = () => {
  const navList = [
    { name: "Dashboard", href: "tlBank//dashboard", active: true },
    { name: "Transactions", href: "tlBank//transactions", active: false },
    { name: "Contributors", href: "tlBank//contributors", active: false },
  ];

  return (
    <MainNav
      style="bg-tlbank-black/40 shadow-white/5"
      maxWidth={"max-w-none"}
      navList={navList}
      btn={<ProfileAvatar />}
      mobileBtn={<ProfileAvatar />}
      size="text-lg"
      itemStyle="rounded-full"
      activeStyle="bg-gradient-primary/20 text-white"
      nonActiveStyle="text-gray-500 hover:text-white"
    />
  );
};

export default TlBankNav;
