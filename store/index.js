import { createGlobalState } from 'react-hooks-global-state';

const {setGlobalState,useGlobalState,getGlobalState} = createGlobalState({
    stepCount:1,
    provider:null,
    address:null,
    user:null,
    deployData:{
        address:null,
        guardian1:null,
        guardian2:null,
        safeName:null
    }
})

export {setGlobalState,useGlobalState,getGlobalState} 