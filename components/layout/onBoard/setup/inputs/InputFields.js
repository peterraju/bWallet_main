import MyWalletMain from './safeName/MyWalletMain';
import GaurdianMain from './gaurdians/GaurdiansMain'
import AddressMain from './address/AddressMain';


const InputFields  = () => {
    return <div className="mt-14 w-full ">
     <MyWalletMain/>  
     <div className='flex w-full'  >
             <GaurdianMain/>
             <AddressMain/>

     </div>
     </div>
}
export default InputFields; 