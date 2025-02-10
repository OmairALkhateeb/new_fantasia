  
"use client"; /////////////
  
  import { IBM_Plex_Sans } from "next/font/google";
  import "./globals.css";
  import { useState } from "react"; // Import useState for state management
  import { useRouter } from "next/router";
  import Nav from "@/components/Navigations/CategoryNavbar";
  import Footer from "@/components/sections/footer";
  import FifthSecton from "@/components/sections/fifth_section";
  import Feedback from "@/components/sections/feedback";
  import AddsWithTitle from "@/components/sections/adds_with_title";
  import Image from "next/image"; // Add this import
  import ProductsWithTitle from "@/components/sections/product_with_titles";

  const ProductDetailsPage = () => {
    const router = useRouter();
    const productId = router.query.productId;
    const [product, setProduct] = useState(null);
  
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
          // Handle error gracefully, e.g., display an error message to the user
          // You can set a separate error state to display an error message
        }
      };
  
      if (productId) {
        fetchData();
      }
    }, [productId]);

    // State to track the selected image
    const [selectedImage, setSelectedImage] = useState("/assets/images/add3.avif");

    // State for managing description visibility for each description
    const [visibleDescriptions, setVisibleDescriptions] = useState([false, false, false]);
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


    // const moreProductData = [
    //   { id: 4, image: '/assets/images/add4.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    //   { id: 5, image: '/assets/images/add4.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    //   { id: 6, image: '/assets/images/add4.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    //   { id: 7, image: '/assets/images/add4.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    //   { id: 8, image: '/assets/images/add4.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    //   { id: 9, image: '/assets/images/add4.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    //   { id: 10, image: '/assets/images/add4.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    //   { id: 11, image: '/assets/images/add4.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13" },
    // ];



    // Product data
    const pproduct = {
      id: productId,
      name: "قميص صيفي",
      description:
        "High-quality coffee beans sourced from the best farms around the world. Perfect for a rich and flavorful cup.",
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

    // Toggle function for each description
    const toggleDescription = (index) => {
      const newVisibility = [...visibleDescriptions];
      newVisibility[index] = !newVisibility[index];
      setVisibleDescriptions(newVisibility);
    };

    return (
  <section id="product-details-section" className="py-12 px-4 md:px-12 bg-[#000112]">
    <Nav />
    <div className="py-12 px-16 flex flex-col lg:flex-row custom-flex justify-center items-start min-h-screen bg-gray-800    mx-auto">

    {/* Right Column for Product Image (on small and medium screens) */}




    {/* here should be list of images */}
    <div className="px-12 w-full lg:w-2/5 flex justify-center lg:justify-end px-4 lg:px-8 mb-8 lg:mb-0">
        <img
          src={selectedImage}
          alt={product.name}
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    

      {/* Left Column for Product Details */}
      <div className="w-full lg:w-1/2 flex flex-col text-right px-4 overflow-y-auto py-4">
        <p className="text-white text-lg mb-4 py-4">shirt</p>
        <p className="text-white text-4xl font-semibold mb-6 py-2">{product.name}</p>
        {/* <div className="flex justify-start space-x-4 py-8">
          <p className="text-white text-lg border border-gray-400 px-2 py-1">Full stack</p>
          <p className="text-white text-lg px-2 py-1"></p>
          <p className="text-white text-lg border border-gray-400 px-2 py-1">Man</p>
        </div> */}

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
      {product.images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Product image ${index + 1}`}
          width={75}
          height={75}
          className="rounded-lg px-2 cursor-pointer pt-2"
          // onClick={() => setSelectedImage(image)}
        />
      ))}
    </div>
  </div>


        <hr className="border-t border-gray-600 my-6" />

        {/* Choose Size */}
        <div className="py-8">
          <p className="text-white text-xl font-semibold mb-2">اختر قياسك</p>
          <div className="flex space-x-4">
            {product.sizes.map((size, index) => (
              <span
                // key={index}
                className="text-white text-lg font-semibold border border-gray-400 px-2 py-1 mr-2"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Repeat Description Section 3 times with different titles and descriptions */}
        {product.descriptions.map((desc, index) => (
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
          <div className="mt-6 w-96 mx-auto flex justify-center items-center ">
    <button
      onClick={() => alert("Proceed to checkout")}
      className="bg-gray-500 text-white w-full py-2 hover:bg-gray-600"
    >
    شراء الان
    </button>
  </div>

      </div>





    </div>




        
    {/* <AddsWithTitle
        title="تم اختيار المنتجت على تفضيلاتك "
        subtitle="اناقتك اكبر ويانه"
        images={images}
      /> */}
  <Feedback/>

  <ProductsWithTitle products={smProductData} sectionTitle="منتجات مشابهة"  subTitle="تم اختيار المنتجات التالية بناءا على نتائج البحث لديك" />
  <ProductsWithTitle products={fitProductData} sectionTitle="تناسب قياسك"  subTitle="نرى انك تبحث عن مقاس معين لذا قمنا بحفظ معلومات  مقاسك" />
  <ProductsWithTitle products={fitProductData} sectionTitle="تصفح اكثر"  subTitle="تصفح باقي المنتجات لدينا اكثر من 2000 قطعة داخل المتجر" />
    <FifthSecton />
    <Footer />
  </section>


    );
  };

  export default ProductDetailsPage;
