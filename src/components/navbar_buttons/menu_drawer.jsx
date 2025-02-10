import React from "react";
import Image from "next/image";
import Close from "@/assets/icons/close.png";  

const MenuDrawer = ({ isOpen, toggleDrawer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleDrawer}>
      <div
        style={{ backgroundColor: "#282828" }}
        className="h-full w-80 p-6 shadow-lg overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing the drawer when interacting with it
      >
        <div className="flex justify-between items-center mb-4 py-8">
          <h2 className="text-2xl font-semibold text-white">الفلاتر</h2>
          <Image
            src={Close}
            alt="Close"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-70"
            onClick={toggleDrawer}
          />
        </div>

        {/* Product Filter */}
        <div className="mb-6">
          <h3 className="text-xl font-medium text-white mb-2 py-4">للمنتجات</h3>
          <div className="flex flex-col space-y-4">
            <label className="flex items-center text-white p-2">
              <input type="checkbox" className="mr-4" />
              jeans - جينز
            </label>
            <label className="flex items-center text-white p-1">
              <input type="checkbox" className="mr-4" />
              Shirt - قمصان
            </label>
            <label className="flex items-center text-white p-1">
              <input type="checkbox" className="mr-4" />
              Ti-shirt - تي شيرت
            </label>
            <label className="flex items-center text-white p-1">
              <input type="checkbox" className="mr-4" />
              Footware
            </label>
          </div>
        </div>

        {/* Gender Filter */}
        <div className="mb-6">
          <h3 className="text-xl font-medium text-white mb-2 py-4">بحسب الجنس</h3>
          <div className="flex flex-col space-y-4">
            <label className="flex items-center text-white text-lg p-2">
              <input type="checkbox" className="mr-4" />
              Men - رجالي
            </label>
            <label className="flex items-center text-white p-1">
              <input type="checkbox" className="mr-4" />
              Women - نساء
            </label>
            <label className="flex items-center text-white p-1">
              <input type="checkbox" className="mr-4" />
              Kids - اطفال
            </label>
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="text-xl font-medium text-white mb-2 py-4">بحسب السعر</h3>
          <div className="flex flex-col space-y-4">
            <label className="flex items-center text-white text-lg p-2">
              <input type="checkbox" className="mr-4" />
              10,000 IQD - 50,000 IQD
            </label>
            <label className="flex items-center text-white p-1">
              <input type="checkbox" className="mr-4" />
              50,000 IQD - 100,000 IQD
            </label>
            <label className="flex items-center text-white p-1">
              <input type="checkbox" className="mr-4" />
              100,000 IQD - 200,000 IQD
            </label>
          </div>
        </div>

        {/* Stock Filter */}
        <div className="mb-6">
          <h3 className="text-xl font-medium text-white mb-2 py-4">بحسب المخزون</h3>
          <div className="flex flex-col space-y-4">
            <label className="flex items-center text-white text-lg p-2">
              <input type="checkbox" className="mr-4" />
              Full-stock
            </label>
            <label className="flex items-center text-white p-1">
              <input type="checkbox" className="mr-4" />
              Stock
            </label>
            <label className="flex items-center text-white p-1">
              <input type="checkbox" className="mr-4" />
              Out-of-stock
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MenuDrawer;



