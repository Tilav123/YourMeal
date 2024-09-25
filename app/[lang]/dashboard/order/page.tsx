'use client';
import { useState } from 'react';
import ModalDash from '../../ModalDash';
import { useEffect } from 'react';
export default function OrderPage() {
  const [showModal, setShowModal] = useState(false);
  let [data, setData] = useState()
  async function post(data) {
    const response = await fetch(`/api/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: data }),
    });

    const result = await response.json();
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/order');
      const result = await response.json();
      console.log(result);
      setData(result);
    };
    // postMenu({ img: "burgerMeatBomb", name: { ru: "Meat Bomb", en: "Мясная Бомба" }, price: "550₽", сomposition: { ru: "Булки Мясо Салат Сыр Помидор", en: "Bread Meat Salad Cheese Tomato" }, description: {ru: "Вкусный", en: "Delicious"} })
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold">Orders</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition-all">
          Add Order
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">
        {data?.map((order, index) => (
          <div key={index} className="bg-white bg-opacity-10 p-5 rounded-lg shadow-lg w-[255px]">
            <img src={order.text.imageUrl} alt={order.text.title} className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold">{order.text.title}</h3>
            <p className="mt-2 text-sm">{order.text.description}</p>
            <p className="mt-2 text-lg">{order.text.price}</p>
            <p className="mt-2 text-sm">{order.text.composition}</p>
          </div>
        ))}
      </div>

      {showModal && <ModalDash page={"order"} func={post} closeModal={() => setShowModal(false)} />}
    </div>
  );
}
