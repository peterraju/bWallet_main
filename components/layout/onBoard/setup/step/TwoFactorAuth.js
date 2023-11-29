'use client'

import { Box, GradBorder, SwitchCustomStyles } from "../StepsCommon";

const TwoFactorAuth = () => {
  return (
    <div className="mt-[92px]">
      <div className=" flex justify-between items-center">
        <div>Add an extra layer of security:</div>
        <div className="flex">
          <div className="mr-5"><SwitchCustomStyles/></div>
          {/* purple gradient is unknown */}
          <div className=" gradient-text ">Enable 2FA</div>
        </div>
      </div>
     <div className="mt-7">
       <Box 
        head={"Pass Key"}
        para="Strengthen security with a personal passkey for Two-Factor Authentication. Add an extra layer by entering your unique passkey."
        svg={"images/modal/setup/desktop.svg"}
      />
     </div>
     <div className="mt-3">

       <Box className='mt-10'
        head={"Browser Fingerprint"}
        para={
          "Your unique browser traits become your secure key, streamlining the login process for added protection."
        }
        svg={'images/modal/setup/browserfingerprint.svg'} /> 
     </div>
     </div>
  );
};

export default TwoFactorAuth;
