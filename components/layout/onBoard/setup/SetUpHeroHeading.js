const headings = [
  "Establish a Secure Identity",
  "Double Your Security",
  "Open Your Wallet",
];
const para = [
  "Provide your safe name and guardian name to fortify your digital identity.",
  "Add an extra layer of protection to your account by turning on Two-Factor Authentication (2FA).",
  "Get ready to use your digital money by opening your wallet.",
];

const SetUpHeroHeading = ({page}) => {
  return (
    <div className="flex flex-col items-center px- ">
            <div className="  font-clash-display text-center text-[64px] font-medium">
      {headings[page]}
    </div>
    <div className=" w-[512px] text-center decoration-[#C8C8C8] text-[#C8C8C8] text-lg ">{para[page]}</div>
    

    </div>
  );
};
export default SetUpHeroHeading;