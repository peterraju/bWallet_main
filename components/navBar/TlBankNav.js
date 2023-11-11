"use client";

import { usePathname } from "next/navigation";

import MainNav from "./MainNav";
import ProfileAvatar from "../ui/profile/ProfileAvatar";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";

const TlBankNav = () => {
  const activeNav = usePathname().split("/")[2];
  const { address } = useAccount();
  const signature = useSelector((state) => state.wallet.signature);

  const navList = address &&
    signature && [
      {
        name: "Dashboard",
        href: "/tlBank/dashboard",
        active: activeNav === "dashboard",
      },
      {
        name: "Transactions",
        href: "/tlBank/transactions",
        active: activeNav === "transactions",
      },
      {
        name: "Contributors",
        href: "/tlBank/contributors",
        active: activeNav === "contributors",
      },
    ];

  return (
    <MainNav
      style="bg-tlbank-black/40 shadow-white/5"
      maxWidth={"max-w-none"}
      navList={navList}
      btn={<ProfileAvatar screen="lg" />}
      mobileBtn={<ProfileAvatar screen="sm" />}
      size="text-lg"
      itemStyle="rounded-full"
      activeStyle="bg-gradient-primary/20 text-white"
      nonActiveStyle="text-gray-500 hover:text-white"
    />
  );
};

export default TlBankNav;
