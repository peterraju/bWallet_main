const headings = [
  "Setup Your Account",
  "Authenticate Your Wallet",
  "Deploy Your Wallet",
];

const OnBoardHeading = ({ page }) => {
  return (
    <>
      <h2 className="  mt-28 mb-16 font-clash-display text-[32px]">
        {headings[page]}
      </h2>
      {/* <p>{paragraph}</p> */}
    </>
  );
};

export default OnBoardHeading;
