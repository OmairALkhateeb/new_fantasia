"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductByCategory = ({ categoryName, products }) => {
  const router = useRouter();
  const scrollContainerRef2 = useRef(null);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleBackClick = () => {
    router.push("/");
  };

  const handleProductClick = (productId) => {
    
    // router.push(`/product_details_page`);
    router.push(`/product_details_page?id=${productId}`);

  };


  

  return (
    <section className="relative py-12 px-4 bg-[#000112]">
      {/* Breadcrumb Navigation */}
      <div className="mb-8 text-white">
        <span
          className="text-lg cursor-pointer hover:text-gray-300"
          onClick={handleBackClick}
        >
          الرئيسية 
        </span>
        {/* <span className="text-lg text-white"> / {categoryName}</span> */}
      </div>

      {/* Product Scrolling Section */}
      <div className="relative bg-[#000112]">
        {/* Scroll Left Button */}
        <button
          onClick={() => scrollLeft(scrollContainerRef2)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-4 shadow-lg hover:bg-opacity-90 focus:outline-none z-10"
        >
          &#10094;
        </button>

        {/* Scroll Right Button */}
        <button
          onClick={() => scrollRight(scrollContainerRef2)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-4 shadow-lg hover:bg-opacity-90 focus:outline-none z-10"
        >
          &#10095;
        </button>

        {/* Product List */}
        <div
          ref={scrollContainerRef2}
          className="flex gap-4 py-4 items-center no-scrollbar"
          style={{
            scrollBehavior: "smooth",
            flexWrap: "nowrap",
            overflowX: "auto",
          }}
        >
          {products && products.length > 0 ? (
            products.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[300px] h-[70vh] overflow-hidden relative"
                onClick={() => handleProductClick(item.id)}
              >
                {/* Product Image */}
                <Image
                  src={item.thumbnail || "/fallback-image.jpg"} // Fallback image if thumbnail is missing
                  alt={item.name || "Product Image"} // Fallback alt text
                  width={300}
                  height={0}
                  style={{ height: "50vh", objectFit: "cover" }}
                />

                {/* Product Details */}
                <div className="p-2 shadow-md">
                  <h2 className="text-lg text-white font-semibold">
                    {item.name || "Unnamed Product"}
                  </h2>
                  <p className="text-white mt-1">
                    Price: {item.price ? `$${item.price}` : "N/A"}
                  </p>
                  <p className="text-gray-400 mt-1">
                    {item.description || "No description available"}
                  </p>
                  <div className="flex justify-end mt-1">
                    <span className="text-white">
                      Material: {item.material || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No products found in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductByCategory;
