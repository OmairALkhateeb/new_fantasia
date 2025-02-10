import FirstSection from "@/components/sections/first_section";
import SecSection from "@/components/sections/sec_section";
import ThirdSection from "@/components/sections/third_section";
import FourthSecton from "@/components/sections/fourth_section";
import FifthSecton from "@/components/sections/fifth_section";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <FirstSection/>
  <SecSection/>
  <ThirdSection/>
  <FourthSecton/>
  <FifthSecton/>
  <Footer/>
  {/* <FourthSecton/> */}

  </>
  );
}
