"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Nav from "@/components/Navigations/CategoryNavbar";
import Footer from "@/components/sections/footer";
import FifthSecton from "@/components/sections/fifth_section";
import Feedback from "@/components/sections/feedback";
import Image from "next/image";
import ProductsWithTitle from "@/components/sections/product_with_titles";

const ProductDetailsPage = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  // State to track the selected image
  const [selectedImage, setSelectedImage] = useState("/assets/images/add3.avif");

  // State for managing description visibility for each description
  const [visibleDescriptions, setVisibleDescriptions] = useState([false, false, false]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fantasia-shop.com/products/${productId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError(error); // Set error state
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (productId) {
      fetchData();
    }
  }, [productId]);

  // Toggle function for each description
  const toggleDescription = (index) => {
    const newVisibility = [...visibleDescriptions];
    newVisibility[index] = !newVisibility[index];
    setVisibleDescriptions(newVisibility);
  };

  // Default product data if API fails or is not available
  const defaultProduct = {
    id: productId,
    name: "قميص صيفي",
    description: "High-quality coffee beans sourced from the best farms around the world. Perfect for a rich and flavorful cup.",
    price: "24.99",
    image: "/assets/images/add3.avif",
    images: [
      "/assets/images/add4.avif",
      "/assets/images/add1.avif",
      "/assets/images/add2.avif",
      "/assets/images/add3.avif",
      "/assets/images/add2.avif",
      "/assets/images/add1.avif",
    ],
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L", "XL"],
    descriptions: [
      {
        title: "وصف المنتج ",
        description: "جاكيت صوف ايطالي رسمي متوفر بعدة الوان يجمع بين الفخامة والراحة مناسب للتنسيقات الرسمية."
      },
      {
        title: "نوع الخامة",
        description: "جاكيت صوف ايطالي رسمي متوفر بعدة الوان يجمع بين الفخامة والراحة مناسب للتنسيقات الرسمية."
      },
      {
        title: "التوصيل والاستقبال",
        description: "جاكيت صوف ايطالي رسمي متوفر بعدة الوان يجمع بين الفخامة والراحة مناسب للتنسيقات الرسمية."
      }
    ]
  };

  // Use the product from API or fallback to default product
  const currentProduct = product || defaultProduct;

  if (loading) {
    return <div className="text-white text-center py-12">Loading...</div>;
  }

  if (error) {
    return <div className="text-white text-center py-12">Error loading product details. Please try again later.</div>;
  }

  return (
    <section id="product-details-section" className="py-12 px-4 md:px-12 bg-[#000112]">
      <Nav />
      <div className="py-12 px-16 flex flex-col lg:flex-row custom-flex justify-center items-start min-h-screen bg-gray-800 mx-auto">
        {/* Right Column for Product Image */}
        <div className="px-12 w-full lg:w-2/5 flex justify-center lg:justify-end px-4 lg:px-8 mb-8 lg:mb-0">
          <img
            src={selectedImage}
            alt={currentProduct.name}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Left Column for Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col text-right px-4 overflow-y-auto py-4">
          <p className="text-white text-lg mb-4 py-4">shirt</p>

          <hr className="border-t border-gray-600 my-6" />

          {/* Product Price */}
          <div className="flex justify-between">
            <div className="flex justify-between items-center mt-1">
              {/* <span className="text-gray-400 bg-gray-700 bg-opacity-80 px-2 py-1 rounded-md">5%</span> */}
              {/* <h2 className="text-white text-lg mb-0 py-1 px-4 line-through inline-block">QD 0</h2> */}
            </div>
            <p className="text-white text-2xl mb-4 py-2 font-light py-8">IQD 20,000</p>
          </div>

          <hr className="border-t border-gray-600 my-6" />

          {/* Models of the same product */}
          <div className="py-8">
            <p className="text-white text-lg font-semibold mb-2">موديلات اخرى من نفس المنتج</p>
            <div className="flex space-x-4 overflow-x-auto whitespace-nowrap flex-wrap">
              {currentProduct.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Product image ${index + 1}`}
                  width={75}
                  height={75}
                  className="rounded-lg px-2 cursor-pointer pt-2"
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>

          <hr className="border-t border-gray-600 my-6" />

          {/* Choose Size */}
          <div className="py-8">
            <p className="text-white text-xl font-semibold mb-2">اختر قياسك</p>
            <div className="flex space-x-4">
              {currentProduct.sizes.map((size, index) => (
                <span
                  key={index}
                  className="text-white text-lg font-semibold border border-gray-400 px-2 py-1 mr-2"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Repeat Description Section 3 times with different titles and descriptions */}
          {currentProduct.descriptions.map((desc, index) => (
            <div key={index} className="py-8">
              <p
                className="text-white text-xl font-semibold cursor-pointer flex items-center justify-start"
                onClick={() => toggleDescription(index)}
              >
                {desc.title}
              </p>

              {visibleDescriptions[index] && (
                <p className="text-white text-lg font-light mt-4">
                  {desc.description}
                </p>
              )}
            </div>
          ))}

          {/* Submit Button */}
          <div className="mt-6 w-96 mx-auto flex justify-center items-center">
            <button
              onClick={() => alert("Proceed to checkout")}
              className="bg-gray-500 text-white w-full py-2 hover:bg-gray-600"
            >
              شراء الان
            </button>
          </div>
        </div>
      </div>

      <Feedback />
      <FifthSecton />
      <Footer />
    </section>
  );
};

export default ProductDetailsPage;