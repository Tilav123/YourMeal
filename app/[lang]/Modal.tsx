'use client';
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Product from "./Product";

interface Translation {
    header: {
        description: string;
        composition: string;
        add: string;
        cheese: string;
    };
}

interface MenuItem {
    text: {
        category: string;
        imageUrl: string;
        title: string;
        description: string;
        composition: string;
        price: string;
    };
}

interface Category {
    _id: string;
    text: {
        title: string;
    };
}

export default function Modal({ translation }: { translation: Translation }) {
    const [isModalOpen, setOpen] = useState<boolean>(false);
    const [arrModal, setArrModal] = useState<MenuItem | null>(null);
    const { id } = useParams();
    const [data, setData] = useState<MenuItem[]>([]);
    const [data_two, setDataTwo] = useState<Category[]>([]);

    const openModal = (arr: MenuItem) => {
        setArrModal(arr);
        setOpen(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/menu');
                if (!response.ok) throw new Error('Failed to fetch data');
                const result: MenuItem[] = await response.json(); // Type the result
                console.log(result);
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const fetchData2 = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/categories');
                if (!response.ok) throw new Error('Failed to fetch data');
                const result: Category[] = await response.json(); // Type the result
                console.log(result);
                setDataTwo(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        fetchData2();
    }, []);

    return (
        <div>
            {/* Modal */}
            <div className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 ${isModalOpen ? 'block' : 'hidden'}`}>
                <div className="w-[684px] h-[432px] rounded-[24px] bg-white p-[24px] flex flex-col justify-between max-[768px]:w-full max-[768px]:h-[100vh] max-[768px]:rounded-none max-[768px]:p-[10px]">
                    <div className="flex justify-between">
                        <p className="font-nunito font-semibold text-[40px] max-[768px]:text-[28px]">{arrModal?.text.title}</p>
                        <img
                            src="/images/close.png"
                            alt="close"
                            className="w-[24px] h-[24px] cursor-pointer"
                            onClick={() => setOpen(false)}
                        />
                    </div>
                    <div className="flex gap-[16px] max-[768px]:flex-col">
                        <img
                            src={arrModal?.text.imageUrl}
                            alt="burger"
                            className="w-[276px] h-[220px] max-[768px]:w-full max-[768px]:h-auto max-[768px]:max-w-[320px] max-[768px]:m-auto"
                        />
                        <div className="flex-grow">
                            <p className="font-nunito mb-[10px] max-[768px]:text-[12px]">{arrModal?.text.description}</p>
                            <p className="font-nunito font-semibold text-[12px] mb-[4px] max-[768px]:text-[10px]">{translation.header.composition}:</p>
                            <p className="text-[12px] font-nunito max-[768px]:text-[10px]">{arrModal?.text.composition}</p>
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
                        <p className="font-nunito font-semibold text-[24px]">{arrModal?.text.price}</p>
                    </div>
                </div>
            </div>

            {/* Product List */}
            <div className="flex flex-col gap-[24px]">
                <p className="font-nunito font-semibold text-[40px] capitalize">
                    {data_two
                        .filter((item) => item._id === id)
                        .map((item, index) => (
                            <span key={index}>{item.text.title}</span>
                        ))}
                </p>
                <h1 className="font-semibold text-[40px] font-nunito capitalize">{id}</h1>
                <div className="flex flex-wrap gap-[30px]">
                    {data
                        .filter((item) => item.text.category === id)
                        .map((item, index) => (
                            <Product func={openModal} key={index} translation={translation} arr={item} />
                        ))}
                </div>
            </div>
        </div>
    );
}
