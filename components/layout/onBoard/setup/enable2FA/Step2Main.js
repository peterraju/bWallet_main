import AddAnExt from "./AddAnExt";
import BrowserBox from "./BrowserBox";
import E2FABtn from "./Enable2FABtn";
import PasskeyBox from "./PasskeyBox";

const { default: E2FA } = require("./Enable2FATxt")

const Step2Main = () => {
    return (<div className="mt-18">
       <div className="flex  justify-between" ><AddAnExt/> <E2FABtn/><E2FA/> </div> 
       <div><PasskeyBox/></div> 
       <div><BrowserBox/></div>
      </div>)
}
export default Step2Main;