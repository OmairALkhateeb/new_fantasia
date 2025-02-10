"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const FourthSection = () => {
  const router = useRouter();
  const scrollContainerRef1 = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect called"); // Track useEffect execution
    fetchMostPopularProducts(); 
  }, []); 

  const fetchMostPopularProducts = async () => {
    console.log("Fetching most popular products...");
    try {
      
      const response = await fetch("https://fantasia-shop.com/api/products/most-popular");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data || []); // Adjust according to actual response
      // console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

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

  if (loading) {
    return (
      <section className="relative py-12 px-4 bg-[#000112]">
        <div className="text-white text-center py-8">Loading products...</div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="relative py-12 px-4 bg-[#000112]">
        <h1 className="text-center text-4xl font-bold mb-8 text-white">الأكثر رواجًا الآن</h1>
        <div className="text-center text-white">No products found.</div>
      </section>
    );
  }

  const ProductItem = ({  item, navigateToProductDetails }) => (
    <div
      key={item.id}
      className="flex-shrink-0 w-[300px] h-[70vh] overflow-hidden relative"
      onClick={() => navigateToProductDetails(item.id)}
    >
      <Image src={item.thumbnail || '/assets/images/placeholder.png'} alt={`Image ${item.id}`} width={300} height={0} style={{ height: "50vh", objectFit: "cover" }} />
      <div className="p-2 shadow-md">
        <div className="flex justify-between mt-1">
          <span className="text-gray-400 bg-gray-700 bg-opacity-80 px-1 py-1 rounded-md">{item.price}%</span>
          <h2 className="text-lg text-white font-semibold">{item.name}</h2>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-gray-400 px-1">{item.description}</span>
          <span className="text-white">{item.subtitle}</span>
        </div>
        <div className="flex justify-end mt-1">
          <span className="text-white">{item.order_items_count} القطع المتوفرة</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-12 px-4 bg-[#000112]">
      <h1 className="text-center text-4xl font-bold mb-8 text-white">الأكثر رواجًا الآن</h1>
      <div className="relative mb-8">
        <button onClick={() => scrollLeft(scrollContainerRef1)} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-4 shadow-lg hover:bg-opacity-90 focus:outline-none z-10">
          &#10094;
        </button>
        <button onClick={() => scrollRight(scrollContainerRef1)} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-4 shadow-lg hover:bg-opacity-90 focus:outline-none z-10">
          &#10095;
        </button>
        <div ref={scrollContainerRef1} className="flex gap-4 py-4 items-center no-scrollbar" style={{ scrollBehavior: "smooth", flexWrap: "nowrap", overflowX: "auto" }}>
          {products.map((item) => (
            <ProductItem key={item.id} item={item} navigateToProductDetails={navigateToProductDetails} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourthSection;