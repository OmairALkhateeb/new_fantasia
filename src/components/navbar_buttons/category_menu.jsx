import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Close from "@/assets/icons/close.png";

const CategoryMenuDrawer = ({ isOpen, toggleDrawer }) => {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isClearanceOpen, setClearanceOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleDrawer}>
      <div
        style={{ backgroundColor: "#282828" }}
        className="h-full w-96 p-6 shadow-lg overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8 px-4 py-4 border-b border-gray-600">
          <h2 className="text-2xl font-semibold text-white">القائمة</h2>
          <button onClick={toggleDrawer} aria-label="Close menu">
            <Image
              src={Close}
              alt="Close"
              width={24}
              height={24}
              className="cursor-pointer hover:opacity-70"
            />
          </button>
        </div>

        <div className="mb-6 px-4">
          <ul className="space-y-4">
            <li className="border-b border-gray-600 py-4">
              <Link href="/" className="text-white text-lg">
                الرئيسة
              </Link>
            </li>
            <li className="border-b border-gray-600 py-4">
              <button
                onClick={() => setProductsOpen(!isProductsOpen)}
                className="flex justify-between items-center text-white text-lg w-full text-left"
              >
                المنتجات
                <span className={`transform transition-transform ${isProductsOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {isProductsOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li className="bold border-b border-gray-600  py-4">
                    <Link href="/products/category1" className="text-white font-bold">
                   المقترح
                    </Link>
                  </li>

                  <li className="bold border-b border-gray-600  py-4">
                    <Link href="/products/category1" className="text-white font-bold">
                   افضل القطع عنا
                    </Link>
                  </li>

                  <li className="bold border-b border-gray-600  py-4">
                    <Link href="/products/category1" className="text-white font-bold">
                   بسبب الاحرف الابجدية
                    </Link>
                  </li>


                  <li className="bold border-b border-gray-600  py-4">
                    <Link href="/products/category1" className="text-white font-bold">
                    بحسب احرف الابجدية آب،،ي
                    </Link>
                  </li>


                  <li className="bold border-b border-gray-600  py-4">
                    <Link href="/products/category1" className="text-white font-bold">
                    بحسب احرف الابجدية آب،،ي
                    </Link>
                  </li>
                 
                  <li className="bold border-b border-gray-600  py-4">
                    <Link href="/products/category1" className="text-white font-bold">
                    الاسعار من الاقل الى الاعلى
                    </Link>
                  </li>

                  <li className="bold border-b border-gray-600  py-4">
                    <Link href="/products/category1" className="text-white font-bold">
                    الاسعار من الاعلى الى الاقل
                    </Link>
                  </li>


                  <li className="bold border-b border-gray-600  py-4">
                    <Link href="/products/category1" className="text-white font-bold">
                   التاريخ من الاقدم للاحدث
                    </Link>
                  </li>



                  <li className="">
                    <Link href="/products/category1" className="text-white font-bold">
                   التاريخ من الاحدث للاقدم
                    </Link>
                  </li>


                </ul>
              )}
            </li>
            <li className="border-b border-gray-600 py-4">
              <button
                onClick={() => setClearanceOpen(!isClearanceOpen)}
                className="flex justify-between items-center text-white text-lg w-full text-left"
              >
                تصفيات المتجر
                <span className={`transform transition-transform ${isClearanceOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {isClearanceOpen && (
              <ul className="mt-2 ml-4 space-y-2">
              <li className="bold border-b border-gray-600  py-4">
                <Link href="/products/category1" className="text-white font-bold">
               المقترح
                </Link>
              </li>

              <li className="bold border-b border-gray-600  py-4">
                <Link href="/products/category1" className="text-white font-bold">
                JENSE - جينز 
                </Link>
              </li>

              <li className="bold border-b border-gray-600  py-4">
                <Link href="/products/category1" className="text-white font-bold">
                PROMOTIONS -  العروض
                </Link>
              </li>


              <li className="bold border-b border-gray-600  py-4">
                <Link href="/products/category1" className="text-white font-bold">
                T-SHirt - تي شيرت
                </Link>
              </li>


              <li className="">
                <Link href="/products/category1" className="text-white font-bold">
                SNEAKERS - أحذية
                </Link>
              </li>
 

      


            </ul>
              )}
            </li>
            <li className="border-b border-gray-600 py-4">
              <Link href="/articles" className="text-white text-lg">
                المقالات
              </Link>
            </li>
            <li className="border-b border-gray-600 py-4">
              <Link href="/faq" className="text-white text-lg">
                الاسئلة الشائعة
              </Link>
            </li>
            <li className="border-b border-gray-600 py-4">
              <Link href="/contact-us" className="text-white text-lg">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenuDrawer;
