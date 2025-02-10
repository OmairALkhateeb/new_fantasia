"use client"; ///////
// import { useEffect } from "react";


// import React, { useState, useEffect } from "react";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Nav from "@/components/Navigations/CategoryNavbar";
import Footer from "@/components/sections/footer"; 
import Priavcy from "@/components/sections/privacy_section"; 

const Suggestion = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady && router.query.category) {
      setCategory(router.query.category);
    }
  }, [router.isReady, router.query]);

 

  return (
    <section id="" className="py-12 px-4 bg-[#000112] border-t border-gray-800">
      <div className="flex flex-col min-h-screen bg-[#000112] w-full py-12">
        <Nav />
        <div className="mb-8 text-white px-12 py-8">
        <span
          className="text-lg cursor-pointer hover:text-gray-300"
        //   onClick={handleBackClick}
        >
        <span className="text-lg text-white"> سياسة الخصوصية / </span>
          الرئيسية
        </span>
      </div>
        <Priavcy/>
        <Footer />
      </div>
    </section>
  );
};

export default Suggestion;
