import { createGlobalState } from 'react-hooks-global-state';

const {setGlobalState,useGlobalState,getGlobalState} = createGlobalState({
    stepCount:1
})

export {setGlobalState,useGlobalState,getGlobalState} 