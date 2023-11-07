"use client";

import {
  handleContributorModal,
  handleLoginModal,
} from "@/redux/slice/modalSlice";
import { ArrowUpRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

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
      {icon ? icon : <ArrowUpRightIcon className="h-5 w-5" />}
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

const TlBankLoginBtn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleLoginModal());
  };

  return (
    <Button
      style={{
        background: "linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
      }}
      className="mt-10 flex cursor-pointer rounded-full border-2 border-gray-900 px-20 py-2 text-xl font-bold text-white"
      onClick={handleClick}
    >
      Login Wallet
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

const ConnectWalletBtn = () => {
  const handleClick = () => console.log("clicked");

  return (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Connect Wallet"
      style="flex bg-gradient-primary w-full justify-center text-sm sm:text-sm md:text-base"
      onClick={handleClick}
    />
  );
};

const SignWalletBtn = () => {
  const handleClick = () => console.log("clicked");

  return (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Sign In"
      style="flex bg-gradient-primary w-full justify-center text-sm sm:text-sm md:text-base"
      onClick={handleClick}
    />
  );
};

const AddContributorBtn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleContributorModal());
  };

  return (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Add"
      icon={<PlusIcon className="h-5 w-5 text-white" />}
      style="flex bg-gradient-primary"
      onClick={handleClick}
    />
  );
};

export {
  LaunchAppBtn,
  CreateWalletBtn,
  HardwareWalletBtn,
  ConnectWalletBtn,
  SignWalletBtn,
  DefaultButton,
  TlBankLoginBtn,
  AddContributorBtn,
};
