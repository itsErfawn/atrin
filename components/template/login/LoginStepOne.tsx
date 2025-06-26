import React, { useState } from 'react'

function LoginStepOne({setStep}:{setStep:(step:number)=>void}) {
    const [input,setInput]=useState('')
  return (
    <div>
        <p className=' font-bold text-xl text-center mb-4'>عضویت یا ورود</p>
        <p className='login-title' >کد تایید به شماره موبایل ارسال خواهد شد.</p>
        <input type="text" onChange={e=>{setInput(e.target.value)}}  className='login-input' placeholder='0913xxxxxxx' />
        <div className="flex items-center justify-center">
        <button className='login-btn' onClick={()=>{setStep(1)}} disabled={input&&input.length===11?false:true}  >تایید و ادامه</button>
        </div>
    </div>
  )
}

export default LoginStepOne