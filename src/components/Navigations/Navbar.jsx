"use client";

import React, { useState } from "react";
import Image from "next/image";
import Menu from "@/assets/icons/menu.png";
import Logo from "@/assets/icons/logo.svg";
import Store from "@/assets/icons/store.svg";
import Search from "@/assets/icons/search.png";
import Sun from "@/assets/icons/sun.png";
import Arch from "@/assets/icons/arch.svg";
import MenuDrawer from "../../components/navbar_buttons/menu_drawer";
import SearchDrawer from "../../components/navbar_buttons/search_drawer";
import CartDrawer from "../../components/navbar_buttons/cart_drawer";

const Navbar = ({ navbarColor }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const toggleSearchDrawer = () => {
    setIsSearchDrawerOpen((prev) => !prev);
  };

  const toggleCartDrawer = () => {
    setIsCartDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className="p-4 fixed top-0 w-full z-50"
        style={{
          backgroundColor: navbarColor,
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={Menu}
              width={20}
              height={20}
              alt="menu"
              className="cursor-pointer hover:opacity-70 filter invert-[100%] sepia-[0%] saturate-[0%] hue-rotate-[360deg] brightness-[100%] contrast-[100%]"
              onClick={toggleDrawer}
            />
          </div>

          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-1">
              <Image src={Logo} alt="logo" width={64} height={64} />
              <p className="text-lg font-semibold text-white">Fantasia Shop</p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-8">
            <Image
              src={Store}
              alt="Store"
              width={20}
              height={20}
              className="hover:opacity-70 filter invert-[100%] sepia-[0%] saturate-[0%] hue-rotate-[360deg] brightness-[100%] contrast-[100%]"
              onClick={toggleCartDrawer} 
            
            />

            <Image
              src={Search}
              width={20}
              height={20}
              alt="Search"
              className="hover:opacity-70"
              onClick={toggleSearchDrawer} 
            />
            {/* <Image src={Sun} width={20} height={20} alt="Sun" className="hover:opacity-70" /> */}
            {/* <Image src={Arch} alt="Arch" width={20} height={20} className="hover:opacity-70" /> */}
          </div>
        </div>
        <MenuDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <SearchDrawer isOpen={isSearchDrawerOpen} toggleDrawer={toggleSearchDrawer} /> 
        <CartDrawer isOpen={isCartDrawerOpen} toggleDrawer={toggleCartDrawer} /> 
      </nav>

      <style jsx>{`
        nav:hover {
          background-color: #000112 !important;
        }
      `}</style>
    </>
  );
};

export default Navbar;
