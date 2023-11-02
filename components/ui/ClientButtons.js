"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const DefaultButton = ({ variant, label, icon, style, color, onClick }) => {
  return (
    <Button
      variant={variant}
      color={color}
      className={`items-center gap-3 px-4 py-2 font-grotesque text-base font-normal capitalize sm:text-lg md:text-xl ${
        style ? style : "flex"
      }`}
      onClick={onClick}
    >
      {label}
      {icon === "" || <ArrowUpRightIcon className="h-5 w-5" />}
    </Button>
  );
};

const DefaultWhiteButton = ({ label, style, onClick }) => {
  return (
    <Button
      variant="filled"
      color="white"
      className={`flex items-center rounded-full bg-white px-8 py-2 font-grotesque text-base font-semibold capitalize sm:text-lg md:text-xl ${
        style ? style : ""
      }`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

const LaunchAppBtn = ({ isDefault, screen, style }) => {
  const router = useRouter();

  const handleClick = () => console.log("clicked");

  return isDefault ? (
    <DefaultButton
      variant="outlined"
      color="white"
      label="Launch App"
      style={screen === "lg" ? "hidden lg:flex" : ""}
      onClick={handleClick}
    />
  ) : (
    <DefaultWhiteButton
      label="Launch App"
      style={style}
      onClick={handleClick}
    />
  );
};

const CreateWalletBtn = ({ isDefault, color, style }) => {
  const router = useRouter();

  const handleClick = () => router.push("/onboard");

  return isDefault ? (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Create Wallet"
      style="flex bg-gradient-primary"
      onClick={handleClick}
    />
  ) : (
    <DefaultWhiteButton
      label="Create Wallet"
      style={style}
      onClick={handleClick}
    />
  );
};

const HardwareWalletBtn = () => {
  return (
    <DefaultButton variant="outlined" color="white" label="Hardware Wallet" />
  );
};

export { LaunchAppBtn, CreateWalletBtn, HardwareWalletBtn };
