import Gaurdians from "../inputs/gaurdians/Gaurdians";
import IGaurdians from "../inputs/gaurdians/IGaurdians";
import ImyWallet from "../inputs/safeName/ImyWallet";
import SafeName from "../inputs/safeName/SafeName";
import IgaurdianName1 from "./IgaurdianBox1";
import IgaurdianName2 from "./IgaurdianBox2";

const DeployWalletMain = () => {
  return (
    <div className="mt-6 ">
      <div className=" ">
        <div className="mt-16">
          <div>
            <SafeName />
          </div>
          <div>
            <ImyWallet />
          </div>
        </div>
        <div className="mt-8">
          <div>
            <Gaurdians />
          </div>
          <div>
            <IgaurdianName1 />
          </div>
          <div>
            <IgaurdianName2 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeployWalletMain;
