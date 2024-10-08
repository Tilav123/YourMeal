'use client';
import { useEffect } from "react";
export default function Order({ order }:any) {
    return (
        <div className="w-full h-[84px] flex py-[16px] justify-between">
            <div className="flex gap-[6px]">
                <img src={`/api/uploads/${order.text.imageUrl}`} alt={order.text.title} className="w-[64px] h-full rounded-[8px] object-cover" />
                <div className="flex flex-col h-full w-auto justify-between">
                    <p className="text-[12px] font-nunito">{order.text.title}</p>
                    <p className="text-[#B1B1B1] text-[12px] font-nunito">{order.text.weight}</p>
                    <p className="text-[12px] font-nunito">{order.text.price}</p>
                </div>
            </div>
            <div className="w-[84px] h-[40px] bg-[#F2F2F3] rounded-[12px] p-[9px] flex items-center justify-between">
                <button className="text-lg">-</button>
                <input
                    type="number"
                    className="w-[40px] text-center border-none focus:outline-none bg-transparent"
                    defaultValue={0}
                />
                <button className="text-lg">+</button>
            </div>
        </div>
    );
}
