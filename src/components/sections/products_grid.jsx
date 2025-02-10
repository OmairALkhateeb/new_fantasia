"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Product_with_st = [
  { id: 1, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45", status: "Available" },
  { id: 2, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45",  },
  { id: 3, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45",  },
  { id: 4, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45",  },
  { id: 5, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45",  },
  { id: 6, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45",  },
  { id: 7, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45",  },
  { id: 8, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45",  },
  { id: 9, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45",  },
  { id: 10, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45",  },
  { id: 11, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45",  },
  { id: 12, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45",  },
  { id: 13, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45",  },
  // More products...
];

const ProductByCategory = ({ categoryName: initialCategoryName }) => {
  const router = useRouter();
  const [categoryName, setCategoryName] = useState(initialCategoryName);

  const handleBackClick = () => {
    router.push('/');
  };
  
  const handleSelectChange = (event) => {
    const selectedLabel = event.target.options[event.target.selectedIndex].text;
    setCategoryName(selectedLabel);
  };

  const handleProductClick = (productId) => {
    // Navigate to the product details page by using the product ID
    router.push(`/product_details_page`);
  };

  return (
    <section className="relative py-12 px-4 bg-[#000112]">
      <div className="mb-8 text-white">
        <span
          className="text-lg cursor-pointer hover:text-gray-300"
          onClick={handleBackClick}
        >
          الرئيسية
        </span>
        <span className="text-lg text-white"> / {categoryName}</span>
      </div>

      <div className="mb-8 text-white flex justify-end items-start px-12">
        <label htmlFor="sortOptions" className="sr-only">Sort by</label>
        <select
          id="sortOptions"
          onChange={handleSelectChange}
          className="ml-4 p-2 bg-transparent text-white border-none rounded-none px-8"
        >
          <option value="advisable" className="text-white bg-[#282828] hover:text-black">Advisable</option>
          <option value="best-seller" className="text-white bg-[#282828] hover:text-black">Best-Seller</option>
          <option value="alphabetical-az" className="text-white bg-[#282828] hover:text-black">Alphabetically-AZ</option>
          <option value="alphabetical-za" className="text-white bg-[#282828] hover:text-black">Alphabetically-ZA</option>
          <option value="price-low-high" className="text-white bg-[#282828] hover:text-black">Price from low to high</option>
          <option value="price-high-low" className="text-white bg-[#282828] hover:text-black">Price from high to low</option>
          <option value="date-old-new" className="text-white bg-[#282828] hover:text-black">Date from old to new</option>
          <option value="date-new-old" className="text-white bg-[#282828] hover:text-black">Date from new to old</option>
        </select>
        <span
          className="text-lg cursor-pointer hover:text-gray-300 mr-4"
        >
          / فرز بواسطة
        </span>
      </div>

      <div className="relative bg-[#000112]">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4"
        >
          {Product_with_st.map((item) => (
            <div key={item.id} className="w-full overflow-hidden relative  p-2 rounded shadow" onClick={() => handleProductClick(item.id)}>
              <Image
                src={item.image}
                alt={`Image ${item.id}`}
                width={300}
                height={200}
                className="w-full h-[50vh] object-cover"
              />
              {item.status && (
                <div className="absolute top-0 right-0 bg-opacity-80 bg-black text-white p-2 text-sm m-1">
                  {item.status}
                </div>
              )}
              <div className="p-2">
                <div className="flex justify-between mt-1">
                  <span className="text-gray-400 bg-gray-700 bg-opacity-80 px-1 py-1 rounded-md">{item.code}</span>
                  <h2 className="text-lg text-white font-semibold">{item.title}</h2>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-gray-400">{item.subtitle2}</span>
                  <span className="text-white">{item.subtitle}</span>
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-white">{item.quantity} القطع المتوفرة</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductByCategory;
