"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  { id: 1, image: '/assets/images/add1.avif' },
  { id: 2, image: '/assets/images/add2.avif' },
  { id: 3, image: '/assets/images/add3.avif' },
  { id: 4, image: '/assets/images/add4.avif' },
  { id: 5, image: '/assets/images/add5.jpeg' },
];

const sec_section = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const totalScrollWidth = scrollContainer.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;
    const halfScrollWidth = totalScrollWidth / 2;

    // Decrease scroll speed and adjust the interval for smoother animation
    const scrollInterval = setInterval(() => {
      if (scrollContainer.scrollLeft >= halfScrollWidth) {
        scrollContainer.scrollLeft = 0; // Reset scroll position
      } else {
        scrollContainer.scrollLeft += 1.9; // Smaller increment for smoother effect
      }
    }, 10); // Increase interval for even smoother movement

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section
      id="sec_section-section"
      className="py-12 px-4 bg-[#000112]"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <p className="text-center text-sm text-white font-medium mb-4">
        نستقبلكم بكل حب في موقعنا الجديد
      </p>
      <h1 className="text-center text-4xl font-bold mb-8 text-white"> 
        Fantasia Shop
      </h1>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 py-4 items-center"
        style={{
          height: "75vh",
          scrollBehavior: "smooth",
          flexWrap: "nowrap",
          overflow: "hidden",
          marginBottom: "30px", 
        }}
      >
        {[...images, ...images].map((item, index) => (
          <div
            key={`image-${index}`}
            className="cursor-pointer flex-shrink-0 w-[400px] h-full overflow-hidden"  
          >
            <Image
              src={item.image}
              alt={`Image ${item.id}`}
              width={400}  
              height={0}
              style={{ height: "75vh", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default sec_section;
