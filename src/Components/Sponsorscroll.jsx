import React, { useEffect, useRef } from "react";

const AutoScrollReel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollSpeed = 1;

    const scroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;

      // Reset when we reach the duplicate content
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth / 2
      ) {
        scrollContainer.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll(); // Start the animation loop

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const images = [
    "/Sponsors2024/hexagon.jpg",
    "/Sponsors2024/workiva.jpg",
    "/Sponsors2024/general dynamics.png",
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
        className="flex overflow-x-scroll whitespace-nowrap no-scrollbar"
      >
        {doubledImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`img-${i}`}
            className="h-24 w-auto mr-7 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollReel;




