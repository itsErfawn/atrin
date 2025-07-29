"use client"
import React, { useState } from 'react'

function page() {
    const [loader,setLoader]=useState(false)
  return (
    <div  className='m-10' >
        <div className="flex items-center gap-5 my-3">
        <button data-variant={"primary"}>دکمه اصلی</button>
        <button disabled data-variant={"primary"}>دکمه اصلی غیرفعال</button>
        <button data-variant={"primary"} onClick={()=>setLoader(!loader)} >
            {loader?
            <div className="loader"></div>
            :
            <p>برای دیدن لودینگ کلیک کنید</p>
            }
        </button>
        <button data-variant={"secondary"}>دکمه ثانوی</button>
        <button disabled data-variant={"secondary"}>دکمه ثانوی غیرفعال</button>
        <button data-variant={"secondary"} onClick={()=>setLoader(!loader)} >
            {loader?
            <div className="loader"></div>
            :
            <p>برای دیدن لودینگ کلیک کنید</p>
            }
        </button>
        </div>
        <h1>لورم ایپسوم لورم ایپسوم</h1>
        <h2>لورم ایپسوم لورم ایپسوم</h2>
        <h3>لورم ایپسوم لورم ایپسوم</h3>
        <h4>لورم ایپسوم لورم ایپسوم</h4>
        <h5>لورم ایپسوم لورم ایپسوم</h5>
        <h6>لورم ایپسوم لورم ایپسوم</h6>
    </div>
  )
}

export default page