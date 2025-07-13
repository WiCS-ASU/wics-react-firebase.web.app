import React, { useEffect, useRef } from "react";

const AutoScrollReel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      // Loop back for infinite scroll
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  const images = [
    "../Sponsors2024/hexagon.jpg",
    "../Sponsors2024/workiva.jpg",
    "../Sponsors2024/general dynamics.png",
    "/Sponsors2024/microchip.png",
    "/Sponsors2024/statefarm.jpg",
    "/Sponsors2024/nationwide.jpg", 
    "/Sponsors2024/aveva.png", 
    "/Sponsors2024/mufg.png", 
    "/Sponsors2024/service now.png"
  ];

  const doubledImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden py-6 bg-white">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar"
      >
        {doubledImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`img-${i}`}
            className={`h-24 w-auto mr-7 rounded-lg transition-all duration-500 ${
              i < 3 ? "scale-110 brightness-110" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollReel;



