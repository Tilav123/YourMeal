
export default function Product({func, translation, arr}:any) {
    return (
        <div
            className="flex-grow max-w-[320px] h-[411px] bg-[#FFFFFF] max-[768px]:w-[145px] max-[768px]:h-[243px] flex flex-col justify-between p-[12px] max-[768px]:p-[4px] rounded-[12px]"
        >
            <div className="flex flex-col gap-[16px] max-[768px]:gap-[10px]">
                <img src={arr.text.imageUrl} className="w-full h-[220px] min-h-[180px] object-cover rounded-[12px] max-[768px]:h-[120px]" />
                <div className="flex flex-col gap-[8px] max-[768px]:gap-[4px]">
                    <p className="text-[24px] font-semibold font-nunito max-[768px]:text-[16px]">{arr.text.price}</p>
                    <p className="font-nunito max-[768px]:text-[12px]">{arr.text.title}</p>
                </div>
            </div>
            <div className="flex flex-col gap-[8px] max-[768px]:gap-[7px]">
                <p className="font-semibold font-nunito text-[#B1B1B1] max-[768px]:text-[12px]">{arr.text.weight}</p>
                <button className="w-full py-[12px] font-nunito bg-[#F2F2F3] rounded-[12px] max-[768px]:py-[9px] max-[768px]:rounded-[9px] max-[768px]:text-[12px]" onClick={()=>func(arr)}>{translation.header.add}</button>
            </div>
        </div>
    );
}
