"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const ProductWithTitles = ({ products, sectionTitle , subTitle }) => {
  const router = useRouter();
  const scrollContainerRef = useRef(null);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const navigateToProductDetails = (productId) => {
    router.push(`/product_details_page?id=${productId}`);
  };

  return (
    <section className="relative py-12 px-4 bg-[#000112]">
     
      <h1 className="text-center text-4xl font-bold mb-8 text-white">{sectionTitle}</h1>
      <h3 className="text-center text-sm text-white font-medium mb-4">{subTitle}</h3>

      <div className="relative mb-8">
        <button
          onClick={() => scrollLeft(scrollContainerRef)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-4 shadow-lg hover:bg-opacity-90 focus:outline-none z-10"
        >
          &#10094;
        </button>

        <button
          onClick={() => scrollRight(scrollContainerRef)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-4 shadow-lg hover:bg-opacity-90 focus:outline-none z-10"
        >
          &#10095;
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 py-4 items-center no-scrollbar"
          style={{ scrollBehavior: "smooth", flexWrap: "nowrap", overflowX: "auto" }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[300px] h-[65vh] overflow-hidden relative"
              onClick={() => navigateToProductDetails(item.id)}
            >
              <Image
                src={item.image}
                alt={`Image ${item.id}`}
                width={300}
                height={0}
                style={{ height: "50vh", objectFit: "cover" }}
              />
              <div className="p-2 shadow-md">
                <div className="flex justify-between mt-1">
                  <span className="text-gray-400 bg-gray-700 bg-opacity-80 px-1 py-1 rounded-md">{item.code}</span>
                  <h2 className="text-lg text-white font-semibold">{item.title}</h2>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-gray-400 px-1">{item.subtitle2}</span>
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

export default ProductWithTitles;
