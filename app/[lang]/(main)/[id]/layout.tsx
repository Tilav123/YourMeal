import '../../globals.css';
import { getDictionary } from "../../dictionaries";
import Order from '../Order';
import Link from 'next/link';
interface Props {
  children: React.ReactNode;
  params: {
    lang: string;
    pageId: string;
  };
}

export default async function RootLayout({ children, params: { lang, pageId } }: Props) {
  const translation = await getDictionary(lang);

  // Fetch orders
  const orderResponse = await fetch('http://localhost:3000/api/order');
  if (!orderResponse.ok) {
    throw new Error('Failed to fetch orders');
  }
  const orders = await orderResponse.json();

  // Fetch categories
  const categoriesResponse = await fetch('http://localhost:3000/api/categories');
  if (!categoriesResponse.ok) {
    throw new Error('Failed to fetch categories');
  }
  const categories = await categoriesResponse.json();
  console.log(categories);


  return (
    <html lang={lang}>
      <head>
        <title>{translation.header.yourmeal}</title>
        <link rel="icon" href="/images/logo_two.png" />
      </head>
      <body>
        <div className="overflow-hidden w-full relative">
          <div className="w-[2880px] h-[2880px] bg-[#FFAB08] rounded-full absolute z-[-1] top-[-2414px] left-[50%] translate-x-[-50%] max-[768px]:w-[911px] max-[768px]:h-[911px] max-[768px]:top-[-222px]"></div>
          <header className="w-full flex items-center justify-center pt-[24px]">
            <a href="">
              <img src="/images/logo.png" className="h-[33.3px] w-auto cursor-pointer" />
            </a>
          </header>
          <div className="flex items-center gap-[21px] justify-center mb-[103px] max-[768px]:flex-col-reverse max-[768px]:mb-[163px]">
            <div className="w-[326px] h-[326px] burger relative">
              <img src="/images/TopBread.png" alt="TopBread" className="topBread absolute w-[205px] h-[150px] left-[45px] top-[26.7px] z-[6]" />
              <img src="/images/Cabbage_one.png" alt="CabbageOne" className="cabbageOne absolute w-[238px] h-[113px] left-[35.7px] top-[84.9px] z-[5]" />
              <img src="/images/Cheese.png" alt="Cheese" className="cheese absolute w-[251px] h-[126px] left-[37.9px] top-[104.5px] z-[4]" />
              <img src="/images/Tomato.png" alt="Tomato" className="tomato absolute w-[221px] h-[135px] left-[50px] top-[84px] z-[3]" />
              <img src="/images/Cabbage_two.png" alt="CabbageTwo" className="cabbageTwo absolute w-[223px] h-[106px] top-[123px] left-[43.6px] z-[2]" />
              <img src="/images/BottomBread.png" alt="BottomBread" className="bottomBread absolute w-[218px] h-[139px] top-[119px] left-[65.2px] z-[1]" />
              <img src="/images/ShadowOfBurger.png" alt="Shadow" className="shadowOfBurger absolute bottom-[9.3px] left-[50%] translate-x-[-50%] w-[209px] h-auto" />
            </div>
            <div className="flex flex-col gap-[52px] max-[768px]:gap-[18px] max-[768px]:mt-[24px]">
              <p className="text-[50px] font-nunito font-extrabold text-white max-[768px]:text-[30px] max-[768px]:text-center">
                {translation.header.mainTitleOne} <br />
                <span className="text-[#FF5C00]">{translation.header.mainTitleTwo}</span>
              </p>
              <p className="font-normal text-[16px] text-white font-nunito max-[768px]:text-[12px] max-[768px]:text-center">
                {translation.header.delivery} 599₽
              </p>
            </div>
          </div>
          <div className="flex gap-[24px] flex-wrap mb-[50px] m-auto w-fit">
            {categories.map((item: any, index: number) => (
              <Link href={`${item.text.name.en}`}>
                <button className={`px-[14px] flex py-[8px] items-center ${pageId === item.text.name.en ? "bg-[#FFAB08]" : "bg-white"} rounded-[50px] gap-[8px]`}>
                  <img src={`/images/${item.text.name.en}Category.png`} alt={item.text.name.en} className="w-[24px] h-[24px]" />
                  <p className="font-nunito capitalize">{lang === 'ru' ? item.text.name.ru : item.text.name.en}</p>
                </button>
              </Link>
            ))}
          </div>
          <div className="w-[1290px] m-auto pb-[100px] max-[1300px]:w-full contr mb-[100px]">
            <div className="flex gap-[30px] h-auto blockt">
              <div className="pt-[106px] min-w-[300px]">
                <div className="bg-white rounded-[18px] w-full h-auto py-[24px] px-[16px]">
                  <div className="flex items-center justify-between mb-[12px]">
                    <p className="text-[24px] font-nunito font-semibold">{translation.header.busket}</p>
                    <button className="py-[2px] px-[16px] bg-[#F2F2F3] font-nunito text-[12px] rounded-[6px]">{orders.length}</button>
                  </div>
                  <div className="flex flex-col mb-[16px]">
                    {orders.map((item: any, index: number) => (
                      <Order key={index} order={item} />
                    ))}
                  </div>
                  <div className="flex justify-between items-center mb-[24px]">
                    <p className="font-nunito">{translation.header.total}</p>
                    <p className="font-nunito">1279₽</p>
                  </div>
                  <button className="bg-[#FF7020] w-full py-[12px] text-white font-nunito rounded-[12px] mb-[8px]">{translation.header.dorder}</button>
                  <div className="flex items-center gap-[8px]">
                    <img src="/images/deliveryIcon.png" alt="Delivery Icon" className="w-[24px] h-[24px]" />
                    <p className="font-nunito text-[12px]">{translation.header.freedelivery}</p>
                  </div>
                </div>
              </div>
              {children}
            </div>
          </div>
          <footer className="bg-white flex justify-center items-center pt-[52px] pb-[39px]">
            <div className="w-[1290px] flex justify-between px-[32px] flex-wrap max-[780px]:gap-[40px]">
              <div className="flex flex-col gap-[60px]">
                <a href="">
                  <img src="/images/orangeLogo.png" alt="Orange Logo" className="w-[300px] h-auto" />
                </a>
                <div className="flex flex-col gap-[4px] max-[780px]:hidden">
                  <p className="font-nunito text-[12px]">© YouMeal, 2022</p>
                  <p className="font-nunito text-[12px]">Design: Anastasia Ilina</p>
                </div>
              </div>
              <div className="flex gap-[50px] flex-wrap">
                <div className="flex flex-col gap-[24px]">
                  <p className="font-nunito text-[24px]">{translation.header.number}</p>
                  <a href="tel:+79308333811" className="font-nunito hover:underline flex gap-[4px]">
                    <img src="/images/tel.png" alt="Telephone Icon" className="w-[24px] h-[24px]" />
                    +7(930)833-38-11
                  </a>
                </div>
                <div className="flex flex-col gap-[22px]">
                  <p className="font-nunito text-[24px]">{translation.header.social}</p>
                  <div className="flex gap-[16px]">
                    <a href="">
                      <img src="/images/vk.png" alt="VK Logo" className="w-[36px] h-[36px]" />
                    </a>
                    <a href="">
                      <img src="/images/telegram.png" alt="Telegram Logo" className="w-[36px] h-[36px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
