'use client';
import { useState, useEffect } from 'react';
import ModalDash from '../../ModalDash';

interface OrderItem {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  composition: string;
}

interface OrderData {
  text: OrderItem;
}

export default function OrderPage() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<OrderData[] | null>(null);

  const post = async (orderItem: OrderItem) => {
    try {
      const response = await fetch(`http://localhost:3000/api/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: orderItem }),
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/order');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

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
            <img
              src={`${order.text.imageUrl}`}
              alt={order.text.title}
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold">{order.text.title}</h3>
            <p className="mt-2 text-sm">{order.text.description}</p>
            <p className="mt-2 text-lg">{order.text.price}</p>
            <p className="mt-2 text-sm">{order.text.composition}</p>
          </div>
        ))}
      </div>

      {showModal && <ModalDash page="order" func={post} closeModal={() => setShowModal(false)} />}
    </div>
  );
}
