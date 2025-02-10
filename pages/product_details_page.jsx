"use client"; /////////////


import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Nav from "@/components/Navigations/CategoryNavbar";
import Footer from "@/components/sections/footer";
import FifthSecton from "@/components/sections/fifth_section";
import Feedback from "@/components/sections/feedback";
import AddsWithTitle from "@/components/sections/adds_with_title";
import Image from "next/image";
import ProductsWithTitle from "@/components/sections/product_with_titles";

const ProductDetailsPage = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const [visibleDescriptions, setVisibleDescriptions] = useState([false, false, false]);

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state
  const { id } = router.query; 


  useEffect(() => {
    if (router.isReady) {
  
      fetchData(id); 
    }
  }, [router.isReady, router.query.category]);


  const fetchData = async () => {
    try {
      setIsLoading(true); // Set loading state to true
      
      const response = await fetch(`https://fantasia-shop.com/api/products/${id}`); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProduct(data);
      setIsLoading(false); // Set loading state to false
    } catch (error) {
      console.error("Error fetching product data:", error);
      setError(error.message); // Set error state
      setIsLoading(false); // Set loading state to false
    }
  };




  const handleBuyNow = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Check if the product already exists in the cart
    const productExists = cart.some(item => item.id === product.id);
  
    if (!productExists) {
      // Add the product with quantity 1
      cart.push({ ...product, quantity: 1 });
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      console.log("Product already exists in the cart.");
    }
  
    // Optionally, navigate to cart page
    // router.push('/cart');
  
    // Print all cart data in local storage
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    console.log("Cart Data:", storedCart);
  
    // localStorage.removeItem('cart');
  };

  const toggleDescription = (index) => {
    const newVisibility = [...visibleDescriptions];
    newVisibility[index] = !newVisibility[index];
    setVisibleDescriptions(newVisibility);
  };
  const images = [
    { id: 1, image: '/assets/images/man1.jpeg' }, 
    { id: 2, image: '/assets/images/man2.jpeg' }, 
    { id: 3, image: '/assets/images/man3.jpeg' },  
    { id: 4, image: '/assets/images/man3.jpeg' },  
  ];


  const smProductData = [
    // { id: 4, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    { id: 5, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    { id: 6, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    { id: 7, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    { id: 8, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    { id: 9, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    { id: 10, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    { id: 11, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
  ];


  const fitProductData = [
    { id: 12, image: '/assets/images/add3.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    { id: 13, image: '/assets/images/add3.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    { id: 14, image: '/assets/images/add3.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    { id: 15, image: '/assets/images/add3.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    { id: 16, image: '/assets/images/add3.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    { id: 17, image: '/assets/images/add3.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    { id: 18, image: '/assets/images/add3.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    { id: 19, image: '/assets/images/add3.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
  ];
  return (
    <section id="product-details-section" className="py-12 px-2 md:px-12 bg-[#000112]">
      <Nav />
      <div className="py-12 px-8  flex flex-col lg:flex-row custom-flex justify-center items-start min-h-screen bg-gray-800    mx-auto">
        {/* Loading state */}
        {isLoading && (
          <div className="w-full flex justify-center items-center">
            <p className="text-white">Loading...</p> 
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="w-full flex justify-center items-center">
            <p className="text-white">Error fetching product data: {error}</p> 
          </div>
        )}

        {product && ( 
          <>
            
           
               {/* here should be list of images */}
               <div className="px-12 py-8 w-full lg:w-2/5 flex justify-center lg:justify-end px-4 lg:px-8 mb-8 lg:mb-0">
                   <img
                     src={product.thumbnail}
                     alt={product.name}
                     className="px-12 py-8 w-full h-auto rounded-lg shadow-lg object-cover"
                   />
                 </div>
               
           
                 {/* Left Column for Product Details */}
                 <div className="w-full lg:w-1/2 flex flex-col text-right px-4 overflow-y-auto py-4">
                   {/* <p className="text-white text-lg mb-4 py-4">shirt</p> */}
                   <p className="text-white text-4xl font-semibold mb-6 py-2">{product.name}</p>
           
                   <hr className="border-t border-gray-600 my-6" />
           
                   {/* Product Price */}
                   <div className="flex justify-between">
                     <div className="flex justify-between items-center mt-1">
                 
                     </div>
                     <p className="text-white text-2xl mb-4 py-2 font-light py-8">{product.price}</p>
                   </div>
           
                   <hr className="border-t border-gray-600 my-6" />
           
                   {/* Models of the same product */}
                   <div className="py-8">
               <p className="text-white text-lg font-semibold mb-2">موديلات اخرى من نفس المنتج</p>
               <div className="flex space-x-4 overflow-x-auto whitespace-nowrap flex-wrap">
                 {product.images.map((image, index) => (
                   <Image
                     key={index}
                     src={image.image} 
                     alt={`Product image ${index + 1}`}
                     width={75}
                     height={75}
                     className="rounded-lg px-2 cursor-pointer pt-2"
                    //  onClick={() => setSelectedImage(image)}
                   />
                 ))}
               </div>
             </div>
           
           
                   <hr className="border-t border-gray-600 my-6" />
           
                   {/* Choose Size */}
                   <div className="py-8">
                     <p className="text-white text-xl font-semibold mb-2">القياس</p>
                     {/* <p className="text-white text-xl font-semibold mb-2">{product.size}</p> */}
                     <div className="flex ">
                       
                       {/* {product.sizes.map((size, index) => ( */}
                         <span className="text-white text-lg font-semibold border border-gray-400 px-2 py-1 mr-2">
                         {product.size}
                         </span>
                       {/* ))} */}
                     </div>
                   </div>



                   <div  className="py-8">
                     <p
                      className="text-white text-xl font-semibold cursor-pointer flex items-center justify-start"
                    onClick={() => toggleDescription(1)}>وصف المنتج</p>
                    {visibleDescriptions[1] && (
                    <p className="text-white text-lg font-light mt-4">
                      {product.description}
                   </p>
                    )}
                   </div>

                   <div  className="py-8">
                     <p
                      className="text-white text-xl font-semibold cursor-pointer flex items-center justify-start"
                    onClick={() => toggleDescription(2)}>نوع الخامة</p>
                    {visibleDescriptions[2] && (
                    <p className="text-white text-lg font-light mt-4">
                      {product.material}
                   </p>
                    )}
                   </div>

                   <div  className="py-8">
                     <p
                      className="text-white text-xl font-semibold cursor-pointer flex items-center justify-start"
                    onClick={() => toggleDescription(3)}>التوصيل والاستقبال</p>
                    {visibleDescriptions[3] && (
                    <p className="text-white text-lg font-light mt-4">
                      {product.delivery_and_exchange_policy}
                   </p>
                    )}
                   </div>
                     {/* Submit Button */}
                     <div className="mt-6 w-96 mx-auto flex justify-center items-center ">
                     <button
                      onClick={() => handleBuyNow()}
                      className="bg-gray-500 text-white w-full py-2 hover:bg-gray-600"
                      >شراء الان</button>
             </div>
           
                 </div>
           
           
           
           
           
                {/* </div> */}
          </>
        )}
      </div>

      <Feedback/>
      {/* <ProductsWithTitle products={smProductData} sectionTitle="منتجات مشابهة"  subTitle="تم اختيار المنتجات التالية بناءا على نتائج البحث لديك" /> */}
      {/* <ProductsWithTitle products={fitProductData} sectionTitle="تناسب قياسك"  subTitle="نرى انك تبحث عن مقاس معين لذا قمنا بحفظ معلومات  مقاسك" /> */}
      {/* <ProductsWithTitle products={fitProductData} sectionTitle="تصفح اكثر"  subTitle="تصفح باقي المنتجات لدينا اكثر من 2000 قطعة داخل المتجر" /> */}
      <FifthSecton />
      <Footer />
    </section>
  );
};

export default ProductDetailsPage;