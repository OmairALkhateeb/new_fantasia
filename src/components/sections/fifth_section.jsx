"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  { id: 1, image: '/assets/images/background.avif' },
  { id: 2, image: '/assets/images/background.avif' },
];

const FifthSection = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollStep = 1.5; // Increased speed for larger images
    const startScrolling = () => {
      const totalScrollWidth = scrollContainer.scrollWidth / 2;

      if (scrollContainer.scrollLeft >= totalScrollWidth) {
        scrollContainer.scrollLeft = 0; // Reset scroll position
      } else {
        scrollContainer.scrollLeft += scrollStep;
      }
    };

    const scrollInterval = setInterval(startScrolling, 10); // Smooth interval

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section
      className="bg-[#000112]"
      style={{
        height: "550px", // Adjusted height to accommodate the new content
        overflow: "hidden",
        position: "relative",
        borderRadius: "0px 0px 0px 0px",
      }}
    >
      {/* Overlay for the filter */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            linear-gradient(rgba(0, 1, 18, 0.5), rgba(0, 1, 18, 0.5)),
            radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgb(0, 1, 18) 100%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Title, subtitle, input field, and submit button */}
      <div
  style={{
    padding: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    width: "90%", // Make it responsive
    maxWidth: "400px" // Limit the maximum width
  }}
>
  <h1 className="text-2xl md:text-3xl font-bold p-2 md:p-4">
    احصل على افضل<br /> العروض الحصرية
  </h1>
  <form className="mt-2 flex flex-col gap-2">
    <div
      style={{
        backgroundColor: "rgba(41, 41, 41, 0.88)",
        padding: "0.7rem",
        borderRadius: "4px",
      }}
    >
      <input
        type="text"
        placeholder="ادخل بريدك الالكتروني"
        className="w-full p-2 rounded bg-transparent text-white"
        style={{
          outline: "none",
          textAlign: "center",
          border: "2px solid transparent",
        }}
      />
    </div>
    <button
      type="button"
      className="p-2 bg-white text-black hover:bg-gray-200"
    >
      ارسال
    </button>
  </form>
  <p className="text-sm md:text-lg mt-2 p-2">
    احصل على احدث صيحات الموضة والعروض الحصرية على موقعنا على الفور. اكتشف اسلوبك المثالي ببضع نقرات
  </p>
</div>


      {/* Wrapper for scrolling content */}
      <div className="">
        <div
          ref={scrollContainerRef}
          className="flex gap-2"
          style={{
            scrollBehavior: "smooth",
            flexWrap: "nowrap",
            overflow: "hidden",
          }}
        >
          {[...images, ...images, ...images, ...images].map((item, index) => (
            <div
              key={`image-${index}`}
              className="cursor-pointer flex-shrink-0"
            >
              <Image
                src={item.image}
                alt={`Image ${item.id}`}
                width={400}
                height={200}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
