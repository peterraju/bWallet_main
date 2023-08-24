'use client'
import React, { useEffect } from 'react'
import Step1 from '@components/Onboard/Step1'
import Step2 from '@components/Onboard/Step2'
import Step3 from '@components/Onboard/Step3'
import Step4 from '@components/Onboard/Step4'
import { getGlobalState, useGlobalState } from '@store'

function RenderOnboard() {
 const [count] = useGlobalState('stepCount');
const cnt = getGlobalState('stepCount')
  useEffect(()=>{
    switch(cnt) {
        case 1:  <Step1/>
        case 2: <Step2/>
        case 3: <Step3/>
        case 4: <Step4/>
      }
  },[count]);
  if(count==1)return <Step1/>
  else if(count===2)return <Step2/>
  else if(count===3)return <Step3/>
  else return <Step4/>
}

export default RenderOnboard