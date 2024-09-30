'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';

interface FormData {
  title: string;
  price: number;
  composition: string;
  description: string;
  category: string;
  weight: number;
  imageUrl?: string;
}

export default function ModalDash({
  closeModal,
  page,
  func,
}: {
  closeModal: () => void;
  page: string;
  func: (data: any) => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [categories, setCategories] = useState<any[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setMessage('Error fetching categories');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!file) {
      setMessage('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      // Отправка изображения на сервер
      const response = await fetch('/api/menu/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        setMessage(errorData.message || 'Image upload failed');
        return;
      }

      const imageData = await response.json();
      const image = imageData.data.replace(/.*(\/|\\)images/, '/images').replace(/\\/g, '/');
      const imaged = image.startsWith('/images') ? image : `/images/${image}`;
      console.log(imaged);
      
      const updatedData = { ...data, imageUrl: imaged };

      func(updatedData);
      reset();
      setFile(null);
      setImage(null);
      setMessage('');
      closeModal();
    } catch (error) {
      setMessage('Something went wrong: ' + error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white text-black p-8 rounded-lg w-96 shadow-2xl relative">
        <h2 className="text-xl font-bold mb-4">Add {page}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('title', { required: 'Title is required' })}
            type="text"
            placeholder="Title"
            className={`w-full mb-4 p-2 border rounded ${
              errors.title ? 'border-red-500' : ''
            }`}
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full mb-4 p-2 border rounded"
          />
          {image && <img src={image} className="w-[200px] h-[200px] mb-4" alt="preview" />}
          {message && <p className="text-red-500">{message}</p>}

          <input
            {...register('price', { required: 'Price is required' })}
            type="text"
            placeholder="Price"
            className={`w-full mb-4 p-2 border rounded ${
              errors.price ? 'border-red-500' : ''
            }`}
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}

          <input
            {...register('composition', { required: 'Composition is required' })}
            type="text"
            placeholder="Composition"
            className={`w-full mb-4 p-2 border rounded ${
              errors.composition ? 'border-red-500' : ''
            }`}
          />
          {errors.composition && <p className="text-red-500">{errors.composition.message}</p>}

          <textarea
            {...register('description', { required: 'Description is required' })}
            placeholder="Description"
            className={`w-full mb-4 p-2 border rounded ${
              errors.description ? 'border-red-500' : ''
            }`}
          />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}

          <select
            {...register('category', { required: 'Category is required' })}
            className={`w-full mb-4 p-2 border rounded ${
              errors.category ? 'border-red-500' : ''
            }`}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category.text.name.en}>
                {category.text.name.en}
              </option>
            ))}
          </select>
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}

          <input
            {...register('weight', { required: 'Weight or Calories is required' })}
            type="text"
            placeholder="Weight or Calories"
            className={`w-full mb-4 p-2 border rounded ${
              errors.weight ? 'border-red-500' : ''
            }`}
          />
          {errors.weight && <p className="text-red-500">{errors.weight.message}</p>}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
          >
            Add {page}
          </button>
        </form>
        <button
          onClick={closeModal}
          className="absolute top-2 right-5 text-gray-600 hover:text-gray-800"
        >
          x
        </button>
      </div>
    </div>
  );
}
