// "use client";

// import React, { useState, useEffect } from "react";
// import { IBM_Plex_Sans } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navigations/Navbar";

// const ibmPlexSans = IBM_Plex_Sans({
//   subsets: ["latin"],
//   variable: "--font-ibm-plex-sans", // Set the custom CSS variable
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
// });

// export default function RootLayout({ children }) {
//   const [navbarColor, setNavbarColor] = useState("transparent");

//   useEffect(() => {
//     const handleScroll = () => {
//       const sec_section = document.getElementById("sec_section-section");
//       const rect = sec_section.getBoundingClientRect();
//       if (rect.top <= 0) {
//         setNavbarColor("#000112");
//       } else {
//         setNavbarColor("transparent");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <html lang="en">
//       <body className={`${ibmPlexSans.variable} antialiased`}>
//         <Navbar navbarColor={navbarColor} />
//         <main>{children}</main>
//       </body>
//     </html>
//   );
// }


import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/Navigations/Navbar"; // Client component

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans", // Set the custom CSS variable
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} antialiased`}>
        <NavbarWrapper /> {/* Use client component */}
        <main>{children}</main>
      </body>
    </html>
  );
}
