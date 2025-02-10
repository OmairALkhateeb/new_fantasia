"use client"; /////////////


// import React, { useState, useEffect } from "react";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Nav from "@/components/Navigations/CategoryNavbar";
import Footer from "@/components/sections/footer";
import FifthSecton from "@/components/sections/fifth_section";
import ProductGrid from "@/components/sections/products_grid";

const Promotions = () => {
  const router = useRouter();
  // const [category, setCategory] = useState(null);

  useEffect(() => {
    if (router.isReady && router.query.category) {
      setCategory(router.query.category);
    }
  }, [router.isReady, router.query]);

 

  return (
    <section id="sec_section-section" className="py-12 px-4 bg-[#000112] border-t border-gray-800">
      <div className="flex flex-col min-h-screen bg-[#000112] w-full py-12">
        <Nav />
        <div className="flex-grow">
          {/* Main content goes here */}
        </div>
        <ProductGrid categoryName="عروض الموسم" />
        <FifthSecton />
        <Footer />
      </div>
    </section>
  );
};

export default Promotions;
