import FieldName from "../FieldName";
import { StepInput,GardianIp } from "../StepsCommon";

const DeployWallet = () => {
  return(
    <div>
           
      <div className=" mt-14">
        <FieldName val={'Safe Name'}/>
        <StepInput pholder={"myWallet"} styles={"  w-full h-10 placeholder:ml-3 "} />
        
      </div>
     <div className=" flex flex-col mt-5">

      <FieldName val="Gaurdian"/>
      <GardianIp name={'Gaurdian Name'} address={'0x2feA30rfjsoH022Psfl3EQBklt4'}/>
      <GardianIp name={'Gaurdian Name'} address={'0x2feA30rfjsoH022Psfl3EQBklt4'}/>
      
      </div> 


    </div>
  )
};

export default DeployWallet;
