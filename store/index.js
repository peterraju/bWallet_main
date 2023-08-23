import { createGlobalState } from 'react-hooks-global-state';

const {setGlobalState,useGlobalState,getGlobalState} = createGlobalState({
    stepCount:1,
    provider:null,
    address:null,
    user:null
})

export {setGlobalState,useGlobalState,getGlobalState} 