import React, { useState } from 'react'

function LoginStepTwo({setStep}:{setStep:(step:number)=>void}) {
    const [input,setInput]=useState('')
  return (
    <div>
    <p className=' font-bold text-xl text-center mb-4'>عضویت یا ورود</p>
    <p className='login-title' >کد ارسال شده را وارد کنید.</p>
    <input type="text" onChange={e=>{setInput(e.target.value)}}  className='login-input' placeholder='کد تایید' />
    <div className="flex items-center justify-center">
    <button className='login-btn'  >تایید</button>
    </div>
</div>
  )
}

export default LoginStepTwo