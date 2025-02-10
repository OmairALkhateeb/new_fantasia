'use client'; // Indicate client-side rendering

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 
import { API_URL } from '../../config/config';

const ThirdSection = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`https://fantasia-shop.com/api/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Handle navigation, passing the category ID as a query parameter
  const handleClick = (categoryId) => {
    router.push(`/category_page?id=${categoryId}`);
  };

  const renderImageCard = (item) => (
    <div
      key={`category-${item.id}`}
      className="cursor-pointer overflow-hidden rounded-sm text-white flex flex-col"
      onClick={() => handleClick(item.id)} // Pass category ID instead of name
      style={{
        background: 'linear-gradient(222deg, #000229 0%, rgb(0, 2, 41) 100%)',
        padding: '0',
        borderRadius: '4px',
        border: '2px solid rgba(255, 255, 255, 0.05)',
        width: '350px',
        height: '350px',
        position: 'relative',
      }}
    >
      <div style={{ paddingTop: '30px', paddingBottom: '10px' }}>
        <h1 className="text-2xl font-semibold text-center">{item.name}</h1>
        {item.description && (
          <p className="text-gray-300 text-center" style={{ fontSize: '0.625rem', marginBottom: '8px' }}>
            {item.description}
          </p>
        )}
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
        className="hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <Image
          src={item.thumbnail} // Ensure this is a valid URL string
          alt={`Category ${item.name}`}
          layout="fill"
          objectFit="cover"
          className="rounded-md drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)] transform hover:scale-110"
        />
      </div>
    </div>
  );

  return (
    <section id="sec_section-section" className="py-12 px-4 bg-[#000112]">
      <h2 className="text-center text-4xl font-bold mb-4 text-white">الارتقاء بأسلوبك</h2>
      <p className="text-center text-sm text-white font-medium mb-2">
        اكتشف المزيج المثالي بين الراحة والأناقة مع مجموعتنا الحصرية. اكتشف العروض على الجينز والأحذية الرياضية والمزيد!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mx-auto py-4">
        {categories.length > 0 ? (
          categories.map(renderImageCard)
        ) : (
          <p className="text-white">Loading categories...</p>
        )}
      </div>
    </section>
  );
};

export default ThirdSection;  