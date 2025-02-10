import React from "react";


const FirstSection = () => {
  return (
    <section className="relative sm:px-14 xl:px-3 h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          autoPlay
          muted
          playsInline
          loop
          className="object-cover w-full h-full"
          src="https://video-previews.elements.envatousercontent.com/h264-video-previews/34b4f82d-339a-4c07-ba47-e8a87ded3de1/2733283.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
      </div>
    </section>
  );
};

export default FirstSection;
