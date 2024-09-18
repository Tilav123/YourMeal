import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Your Meal</title>
        <link rel="icon" href="/logo_two.png" />
      </head>
      <body
      >
        <div className="overflow-hidden w-full relative">
          <div className="w-[2880px] h-[2880px] bg-[#FFAB08] rounded-full absolute z-[-1] top-[-2414px] left-[50%] translate-x-[-50%] max-[768px]:w-[911px] max-[768px]:h-[911px] max-[768px]:top-[-222px]"></div>
          <header className="w-full flex items-center justify-center pt-[24px]">
           <a href=""> <img src="/logo.png" className="h-[33.3px] w-auto cursor-pointer" /> </a>
          </header>
          {children}
          <footer className="bg-white flex justify-center items-center pt-[52px] pb-[39px]">
            <div className="w-[1290px] flex justify-between px-[32px] flex-wrap max-[780px]:gap-[40px]">
              <div className="flex flex-col gap-[60px]">
               <a href=""> <img src="/orangeLogo.png" alt="" className="w-[300px] h-auto" /> </a>
                <div className="flex flex-col gap-[4px] max-[780px]:hidden">
                  <p className="font-nunito text-[12px]">© YouMeal, 2022</p>
                  <p className="font-nunito text-[12px]">Design: Anastasia Ilina</p>
                </div>
              </div>
              <div className="flex gap-[50px] flex-wrap">
                <div className="flex flex-col gap-[24px]">
                  <p className="font-nunito text-[24px]">Номер для заказа</p>
                  <a href="tel:+79308333811" className="font-nunito hover:underline flex gap-[4px]">
                    <img src="/tel.png" alt="" className="w-[24px] h-[24px]" />
                    +7(930)833-38-11
                  </a>
                </div>
                <div className="flex flex-col gap-[22px]">
                  <p className="font-nunito text-[24px]">Мы в соцсетях</p>
                  <div className="flex gap-[16px]">
                   <a href=""> <img src="/vk.png" alt="" className="w-[36[x] h-[36px]" /> </a>
                   <a href=""> <img src="/telegram.png" alt="" className="w-[36[x] h-[36px]" /> </a>
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
