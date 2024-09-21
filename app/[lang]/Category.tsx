import Link from "next/link"

export default function Category({ name, imgName, active }:any) {
    return (
        <Link href={`${imgName}`}>
            <button className={`px-[14px] flex py-[8px] items-center ${active ? "bg-[#FFAB08]" :"bg-white"} rounded-[50px] gap-[8px]`}>
                <img src={`/images/${imgName}Category.png`} alt={imgName} className="w-[24px] h-[24px]" />
                <p className="font-nunito">{name}</p>
            </button>
        </Link>
    );
}
