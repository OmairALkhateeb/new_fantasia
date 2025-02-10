"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Nav from '@/components/Navigations/CategoryNavbar';
import Footer from '@/components/sections/footer';
import FifthSecton from '@/components/sections/fifth_section';
import ProductByCategory from '@/components/sections/products_by_category_section';
import './globals.css';

const CategoryPage = () => {
  const router = useRouter();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = router.query; 

  useEffect(() => {
    if (router.isReady) {
      const categoryId = router.query.category || id; // Set a default category ID (e.g., "default", "all", or a specific ID) 
      setCategory(categoryId);
  
      fetchProductsByCategory(categoryId); 
    }
  }, [router.isReady, router.query.category]);

  const fetchProductsByCategory = async (categoryId) => {
    try {
      setLoading(true);
      setError(null); 

      const response = await fetch(`https://fantasia-shop.com/api/products/category/${categoryId}`); 
      if (!response.ok) {
        throw new Error('Network response was not ok'); 
      }
      
      const data = await response.json();
      setProducts(data); 
      console.log('API Response:', data); 

    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="sec_section-section" 
      className="min-h-screen py-12 px-4 bg-[#000112] border-t border-gray-800"
    >


      
      <Nav />
      {loading && <p className="text-white">Loading products...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && (
            <ProductByCategory categoryName={category} products={products} />

        // <>
        //   {products.length === 0 ? (
        //     // <p className="text-gray-400">{category}</p>
        //     // <p className="text-gray-400">no products found in this categp</p>
        //   ) : (
        //     <ProductByCategory categoryName={category} products={products} />
        //   )}
        // </>
      )}
      <FifthSecton />
      <Footer />
    </section>
  );
};

export default CategoryPage;

// ProductByCategory.js
 