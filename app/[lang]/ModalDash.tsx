'use client';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  title: string;
  imageUrl: string;
  price: number;
  composition: string;
  description: string;
  category: string;
  weight: number;
}

export default function ModalDash({ closeModal, page, func }: any) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    func(data);
    reset();
    closeModal();
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
            className={`w-full mb-4 p-2 border rounded ${errors.title ? 'border-red-500' : ''}`}
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}

          <input
            {...register('imageUrl', { required: 'Image URL is required' })}
            type="text"
            placeholder="Image URL"
            className={`w-full mb-4 p-2 border rounded ${errors.imageUrl ? 'border-red-500' : ''}`}
          />
          {errors.imageUrl && <p className="text-red-500">{errors.imageUrl.message}</p>}

          <input
            {...register('price', { 
              required: 'Price is required'
            })}
            type="text"
            placeholder="Price"
            className={`w-full mb-4 p-2 border rounded ${errors.price ? 'border-red-500' : ''}`}
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}

          <input
            {...register('composition', { required: 'Composition is required' })}
            type="text"
            placeholder="Composition"
            className={`w-full mb-4 p-2 border rounded ${errors.composition ? 'border-red-500' : ''}`}
          />
          {errors.composition && <p className="text-red-500">{errors.composition.message}</p>}

          <textarea
            {...register('description', { required: 'Description is required' })}
            placeholder="Description"
            className={`w-full mb-4 p-2 border rounded ${errors.description ? 'border-red-500' : ''}`}
          />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}

          <select
            {...register('category', { required: 'Category is required' })}
            className={`w-full mb-4 p-2 border rounded ${errors.category ? 'border-red-500' : ''}`}
          >
            <option value="">Select Category</option>
            <option value="burgers">Burgers</option>
            <option value="snacks">Snacks</option>
            <option value="hotdogs">Hotdogs</option>
            <option value="combo">Combo</option>
            <option value="kebab">Kebab</option>
            <option value="pizza">Pizza</option>
            <option value="vok">Vok</option>
            <option value="desserts">Desserts</option>
            <option value="sauce">Sauce</option>
          </select>
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}

          <input
            {...register('weight', { 
              required: 'Weight or Calories is required'
            })}
            type="text"
            placeholder="Weight or Calories"
            className={`w-full mb-4 p-2 border rounded ${errors.weight ? 'border-red-500' : ''}`}
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
