'use client';
import { useState, useEffect } from 'react';
import ModalDash from '../../ModalDash';

interface MenuItem {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  composition: string;
}

interface MenuData {
  text: MenuItem;
}

export default function Menu() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<MenuData[] | null>(null);

  const post = async (menuItem: MenuItem) => {
    console.log("hello");
    try {
      const response = await fetch(`http://localhost:3000/api/menu`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: menuItem }),
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
        const response = await fetch('http://localhost:3000/api/menu');
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
        <h2 className="text-4xl font-bold">Menu</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition-all">
          Add Product
        </button>
      </div>

      <div className="flex flex-wrap gap-6 mt-10 m-auto w-full">
        {data?.map((item, index) => (
          <div key={index} className="bg-white bg-opacity-10 p-5 rounded-lg shadow-lg ">
            <img src={`${item.text.imageUrl}`} alt={item.text.title} className="rounded-lg mb-4 w-full h-40 object-cover w-[205px]" />
            <h3 className="text-xl font-semibold">{item.text.title}</h3>
            <p className="mt-2 text-sm">{item.text.description}</p>
            <p className="mt-2 text-lg">{item.text.price}</p>
            <p className="mt-2 text-sm">{item.text.composition}</p>
          </div>
        ))}
      </div>

      {showModal && <ModalDash page="menu" closeModal={() => setShowModal(false)} func={post}/>}
    </div>
  );
}
