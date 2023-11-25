const HardwareWallet = () => {
  return (
    <div className="ml-60 mt-6">
      <div className=" text-01 flex w-fit rounded-md bg-purple-900  px-2 font-grotesque text-xs font-normal opacity-25 ">
        <div className="decoration-puple-900   mt-1 text-sm">
          Connect Hardware Wallet
        </div>
        <div className="ml-2  h-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HardwareWallet;
