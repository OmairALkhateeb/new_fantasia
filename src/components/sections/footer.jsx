import Image from 'next/image';
import Logo from "@/assets/icons/logo.svg";
import x from "@/assets/icons/x.png";
import instagram from "@/assets/icons/instagram.png";
import linkedin from "@/assets/icons/linkedin.png";
import tiktok from "@/assets/icons/tiktok.png";
import youtube from "@/assets/icons/youtube.png";
import visa from "@/assets/icons/visa.png";
import red from "@/assets/icons/red.png";
import applePay from "@/assets/icons/applePay.png";
import gPay from "@/assets/icons/gPay.png";
import ash from "@/assets/icons/ash.png";
import qi from "@/assets/icons/qi.png";
import am from "@/assets/icons/am.png";
import stripe from "@/assets/icons/stripe.png";

const Footer = () => {
  return (
    <footer className="text-white py-8 px-4 bg-[#000112] border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Side: Links Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-right md:text-left py-12">
          {[{ title: "المنتجات", links: ["الرئيسية", 
          // "مقترحات", "العروض الترويجية"
        ], paths: ["/",
          //  "/suggestions", "/promotions"
          
          ] },
            { title: "حول العلامة التجارية", links: ["للتواصل", "مقالات", "الاسئلة الشائعة"], paths: ["/contact", "/suggestions", "/questions"] },
            { title: "المعلومات", links: ["الخصوصية", "البنود", " "], paths: ["/privacy", "/terms", " "] }]
            .map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg mb-2">{section.title}</h3>
                <ul>
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href={section.paths[i]} className="text-gray-500 hover:text-white">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* Right Side: Logo and Description */}
        <div className="flex flex-col items-center justify-center gap-4 w-full md:w-auto">
        <div className="flex items-center gap-2 justify-center md:justify-start">
            <Image src={Logo} alt="Fantasia Shop Logo" width={64} height={64} />
            <p className="text-lg font-semibold">Fantasia Shop</p>
          </div>
          <div className="flex gap-4 mt-2 justify-center md:justify-start">
            {[{ src: x, alt: "X", href: "https://example.com/x" },
              { src: instagram, alt: "Instagram", href: "https://instagram.com" },
              { src: linkedin, alt: "LinkedIn", href: "https://linkedin.com" },
              { src: tiktok, alt: "TikTok", href: "https://tiktok.com" },
              { src: youtube, alt: "YouTube", href: "" }]
              .map((icon, index) => (
                <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer" className="transition duration-300">
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} className="filter grayscale brightness-50 invert" />
                </a>
              ))}
          </div>
          <p className="text-gray-400 leading-relaxed text-center md:text-center">
            للطلب او المراسلة من خلال الموقع الالكتروني (تواصل <br /> معنا) او دايركت مسج، يمكنكم زيارة فروعنا في
            بغداد القادسية - الحلة - شارع 40
          </p>
        </div>
      </div>

      {/* Bottom Section with Payment Icons */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-2 py-8 px-12">
        <div className="flex gap-4 justify-center md:justify-start">
          {[visa, red, applePay, gPay, ash, qi, am, stripe].map((icon, index) => (
            <Image key={index} src={icon} alt={`Payment option ${index + 1}`} width={35} height={35} />
          ))}
        </div>
        <div className="text-center mt-8 text-gray-500">
          &copy; 2024 Fantasia جميع الحقوق محفوظة لصالح
        </div>
      </div>
    </footer>
  );
};

export default Footer;
