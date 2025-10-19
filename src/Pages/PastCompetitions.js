import React, { useState, useEffect } from "react";

const competitions = [
  {
    year: "2025-2026",
    image: "/api/placeholder/400/400",
    link: "/competitions/2025-2026",
    description: "Major events and achievements"
  },
  {
    year: "2024-2025",
    image: "/api/placeholder/400/400",
    link: "/competitions/2024-2025",
    description: "Major events and achievements"
  },
  {
    year: "2023-2024",
    image: "/api/placeholder/400/400",
    link: "/competitions/2023-2024",
    description: "Major events and achievements"
  },
  {
    year: "2022-2023",
    image: "/api/placeholder/400/400",
    link: "/competitions/2022-2023",
    description: "Major events and achievements"
  },
  {
    year: "2021-2022",
    image: "/api/placeholder/400/400",
    link: "/competitions/2021-2022",
    description: "Major events and achievements"
  },
  {
    year: "Before 2021",
    image: "/api/placeholder/400/400",
    link: "/competitions/before-2021",
    description: "Historical events and milestones"
  }
];

function PastCompetitions() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    competitions.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  const colors = ['#fbbf24', '#fb923c', '#ef4444', '#22c55e', '#3b82f6', '#a855f7'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-purple-900">
          Major Events Timeline
        </h1>
        <p className="text-xl text-center mb-16 text-purple-700">
          A Journey Through Academic Years
        </p>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-orange-400 via-red-400 via-green-400 via-blue-400 to-purple-400 hidden md:block"></div>
          
          {competitions.map((comp, index) => (
            <div
              key={index}
              className={`relative mb-20 transition-all duration-700 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : index % 2 === 0 ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'
              }`}
            >
              {/* Center the sphere on the timeline */}
              <div className="flex justify-center">
                <a
                  href={comp.link}
                  className="group block relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Sphere container */}
                  <div 
                    className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-purple-400/50 z-10"
                    style={{
                      transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                      border: `6px solid ${colors[index % 6]}`
                    }}
                  >
                    {/* Image inside sphere */}
                    <img
                      src={comp.image}
                      alt={`Events ${comp.year}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Year label inside sphere */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h3 className="text-3xl font-bold text-white mb-1">
                        {comp.year}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Description box - alternating left and right */}
                  <div 
                    className={`absolute ${index % 2 === 0 ? 'left-full ml-8' : 'right-full mr-8'} top-1/2 transform -translate-y-1/2 bg-white rounded-xl shadow-lg p-5 w-56 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden lg:block`}
                    style={{
                      transform: hoveredIndex === index 
                        ? `translateY(-50%) ${index % 2 === 0 ? 'translateX(0)' : 'translateX(0)'}` 
                        : `translateY(-50%) ${index % 2 === 0 ? 'translateX(-20px)' : 'translateX(20px)'}`
                    }}
                  >
                    <p className="text-sm text-purple-700 font-medium">{comp.description}</p>
                    <div className="mt-2 text-purple-500 text-xs font-semibold">Click to explore →</div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PastCompetitions;