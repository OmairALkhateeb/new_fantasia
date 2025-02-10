// "use client";

"use client"; /////////////

import React, { useEffect, useRef } from "react";

const feedbacks = [
  { id: 1, name: "احمد / الموصل", feedback: "الملابس ممتازة جداً، الخامة رائعة والمقاس مضبوط تماماً.", rating: 5 },
  { id: 3, name: "حسين  / النجف الاشرف", feedback: "الجودة والتفاصيل الدقيقة في الملابس جعلتني أستمتع بكل لحظة من ارتدائها.", rating: 5 },
  { id: 4, name: "مازن  / بغداد", feedback: "أحببت كل شيء في هذا المنتج، من اللون إلى التصميم وحتى الراحة", rating: 5 },
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

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "text-white" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section
      id="sec_section-section"
      className="px-4 bg-[#000112]"
      style={{ overflow: "hidden" }}
    >
      <h1 className="text-center text-4xl font-bold mb-8 text-white">اراء الزبائن</h1>
      <p className="text-center text-sm text-white font-medium mb-4">
        OVER 1.000 SATISFIED CUSTOMERS
      </p>
      {/* Auto-scrolling Feedback Cards */}
      <div
  ref={scrollContainerRef}
  className="flex gap-6 items-center py-8"
  style={{
    height: "25vh",
    scrollBehavior: "smooth",
    flexWrap: "nowrap",
    overflow: "hidden",
    marginBottom: "30px",
    background: "linear-gradient(to left, rgba(0, 1, 18, 0.7), rgba(0, 1, 18, 0) 20%, rgba(0, 1, 18, 0.7) 80%, rgba(0, 1, 18, 0.7))",
  }}
>
  {[...feedbacks, ...feedbacks].map((item, index) => (
    <div
      key={`feedback-${index}`}
      className="cursor-pointer flex-shrink-0 w-[400px] overflow-hidden bg-transparent border-2 border-gray-400 p-6 rounded-lg shadow-lg"
      style={{
        height: "150px", // Fixed height for feedback cards
      }}
    >
      <div className="flex items-center mt-2">
        {renderStars(item.rating)} {/* Render star rating */}
        <p className="text-sm text-gray-500 mt-1 px-2">{item.rating}/5</p>
      </div>
      <p className="text-sm text-gray-300 mt-2">{item.feedback}</p>
      <p className="text-lg text-white">{item.name}</p>
    </div>
  ))}
</div>


    </section>
  );
};

export default sec_section;
