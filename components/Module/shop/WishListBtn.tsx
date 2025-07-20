"use client"
import { Heart } from 'lucide-react'
import React, { useState } from 'react'

function WishListBtn() {
    const [active, setActive] = useState(false)
    // test product_id for now
    const product_id = 445444
    async function wishHandler() {
        const res = await fetch("/api/wishlist", {
            method: "POST",
            body: JSON.stringify({ product_id })
        })
        const data = await res.json()
        console.log(data);
        setActive(data.state)
    }
    return (
        <div className="relative group">
            <button className="hover:text-primary transition " onClick={wishHandler}><Heart className={`w-10 h-6 ${active && "fill-red-600"}`} /></button>
            <span className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                افزودن به علاقه‌مندی
            </span>
        </div>
    )
}

export default WishListBtn