import Category from "./Category";
import Order from "./Order";
import Product from "./Product";
export default function Home() {
  return (
    <div className="w-[1290px] m-auto pb-[100px] max-[1300px]:w-full contr">
      <div className="flex items-center gap-[21px] justify-center mb-[103px] max-[768px]:flex-col-reverse max-[768px]:mb-[163px]">
        <div className="w-[326px] h-[326px] burger relative">
          <img src="/TopBread.png" alt="TopBread" className="topBread absolute w-[205px] h-[150px] left-[45px] top-[26.7px] z-[6]" />
          <img src="/Cabbage_one.png" alt="Cabbageone" className="cabbageOne absolute w-[238px] h-[113px] left-[35.7px] top-[84.9px] z-[5]" />
          <img src="/Cheese.png" alt="cheese" className="cheese absolute w-[251px] h-[126px] left-[37.9px] top-[104.5px] z-[4]" />
          <img src="/Tomato.png" alt="tomato" className="tomato absolute w-[221px] h-[135px] left-[50px] top-[84px] z-[3]" />
          <img src="/Cabbage_two.png" alt="Cabbagetwo" className="cabbageTwo absolute w-[223px] h-[106px] top-[123px] left-[43.6px] z-[2]" />
          <img src="/BottomBread.png" alt="bottomBread" className="bottomBread absolute w-[218px] h-[139px] top-[119px] left-[65.2px] z-[1]" />
          <img src="/ShadowOfBurger.png" alt="shadow" className=" shadowOfBurger absolute bottom-[9.3px] left-[50%] translate-x-[-50%] w-[209px] h-auto" />
        </div>
        <div className="flex flex-col gap-[52px] max-[768px]:gap-[18px] max-[768px]:mt-[24px]">
          <p className="text-[50px] font-nunito font-extrabold text-white max-[768px]:text-[30px] max-[768px]:text-center">Только самые <br /> <span className="text-[#FF5C00]">сочные бургеры!</span></p>
          <p className="font-normal text-[16px] text-white font-nunito max-[768px]:text-[12px] max-[768px]:text-center">Бесплатная доставка от 599₽</p>
        </div>
      </div>
      <div className="flex gap-[24px] flex-wrap mb-[50px]">
        <Category name={"Бургеры"} imgName={"burgers"} active={true}></Category>
        <Category name={"Закуски"} imgName={"snacks"} active={false}></Category>
        <Category name={"Хот-доги"} imgName={"hotdogs"} active={false}></Category>
        <Category name={"Комбо"} imgName={"combo"} active={false}></Category>
        <Category name={"Шаурма"} imgName={"kebab"} active={false}></Category>
        <Category name={"Пицца"} imgName={"pizza"} active={false}></Category>
        <Category name={"Вок"} imgName={"Vok"} active={false}></Category>
        <Category name={"Десерты"} imgName={"desserts"} active={false}></Category>
        <Category name={"Соусы"} imgName={"sauce"} active={false}></Category>
      </div>
      <div className="flex gap-[30px] h-auto blockt">
        <div className="pt-[72px] min-w-[300px]">
          <div className="bg-white rounded-[18px] w-full h-auto py-[24px] px-[16px]">
            <div className="flex items-center justify-between mb-[12px]">
              <p className="text-[24px] font-nunito font-semibold">Корзина</p>
              <button className="py-[2px] px-[16px] bg-[#F2F2F3] font-nunito text-[12px] rounded-[6px]">4</button>
            </div>
            <div className="flex flex-col mb-[16px]">
              <Order></Order>
              <Order></Order>
              <Order></Order>
            </div>
            <div className="flex justify-between items-center mb-[24px]">
              <p className="font-nunito">Итого</p>
              <p className="font-nunito">1279₽</p>
            </div>
            <button className="bg-[#FF7020] w-full py-[12px] text-white font-nunito rounded-[12px] mb-[8px]">Оформить заказ</button>
            <div className="flex items-center gap-[8px]">
              <img src="/deliveryIcon.png" alt="deliveryIcon" className="w-[24px] h-[24px]" />
              <p className="font-nunito text-[12px]">Бесплатная доставка</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[30px]">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

      </div>
    </div>
  );
}
