'use client';
import { useState } from "react";
import Product from "./Product";
export default function Modal({translation}:any) {
    let [isModalOpen, setOpen] = useState(false)
    function openModal(){
        setOpen(true)
    }
    return (
        <div>
            <div className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 ${isModalOpen ? 'block' : 'hidden'}`}>
                <div className="w-[684px] h-[432px] rounded-[24px] bg-white p-[24px] flex flex-col justify-between max-[768px]:w-full max-[768px]:h-[100vh] max-[768px]:rounded-none max-[768px]:p-[10px]">
                    <div className="flex justify-between">
                        <p className="font-nunito font-semibold text-[40px] max-[768px]:text-[28px]">{translation.header.meatbomb}</p>
                        <img src="/images/close.png" alt="close" className="w-[24px] h-[24px] cursor-pointer" onClick={() => setOpen(false)} />
                    </div>
                    <div className="flex gap-[16px] max-[768px]:flex-col">
                        <img src="/images/burgerMeatBomb.png" alt="burger" className="w-[276px] h-[220px] max-[768px]:w-full max-[768px]:h-auto max-[768px]:max-w-[320px] max-[768px]:m-auto" />
                        <div className="flex-grow">
                            <p className="font-nunito mb-[10px] max-[768px]:texxt-[12px]">{translation.header.description}</p>
                            <p className="font-nunito font-semibold text-[12px] mb-[4px] max-[768px]:text-[10px]">{translation.header.composition}:</p>
                            {/* cycle */}
                            <p className="text-[12px] font-nunito max-[768px]:text-[10px]">{translation.header.cheese}</p>
                            <p className="text-[12px] font-nunito max-[768px]:text-[10px]">{translation.header.cheese}</p>
                            <p className="text-[12px] font-nunito max-[768px]:text-[10px]">{translation.header.cheese}</p>
                            <p className="text-[12px] font-nunito max-[768px]:text-[10px]">{translation.header.cheese}</p>
                            {/*  */}
                            <p className="text-[12px] font-nunito text-[#B1B1B1]">520г, ккал 430</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-[20px] max-[768px]:mt-0 max-[768px]:flex-wrap">
                        <div className="flex gap-[16px] max-[768px]:w-full max-[768px]:gap-[8px]">
                            <button className="bg-[#FF7020] w-[276px] h-[40px] rounded-[12px] text-white font-nunito max-[768px]:flex-grow">{translation.header.add}</button>
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
                        <p className="font-nunito font-semibold text-[24px]">689₽</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[24px]">
                <p className="font-nunito font-semibold text-[40px]">{translation.categories.burger}</p>
                <div className="flex flex-wrap gap-[30px]">
                    <Product func={openModal} translation={translation}/>
                    <Product func={openModal} translation={translation}/>
                    <Product func={openModal} translation={translation}/>
                    <Product func={openModal} translation={translation}/>
                    <Product func={openModal} translation={translation}/>
                    <Product func={openModal} translation={translation}/>
                    <Product func={openModal} translation={translation}/>
                    <Product func={openModal} translation={translation}/>
                </div>
            </div>
        </div>
    );
}