import React from "react";

const Categories = () => {
  return (
    // usando la libreria tailwindcss
    <nav className="flex justify-center gap-4">
      <a href="#" className="pading-btn px-4 py-2 rounded-lg border border-black bg-orange-200/50  hover:opacity-80 transition-all duration-300 cursor-pointer active:opacity-50">
        🔥 Trending
      </a>
      <a href="#" className="pading-btn px-4 py-2 rounded-lg border border-black  hover:opacity-80 transition-all duration-300 cursor-pointer active:opacity-50 ">
        ❤️ Romance
      </a>
      <a href="#" className="pading-btn px-4 py-2 rounded-lg border border-black  hover:opacity-80 transition-all duration-300 cursor-pointer active:opacity-50">
        🐾 Children
      </a>
    </nav>
    
    // <section className="categories">
    // <button className="btn category-btn">🔥 Trending</button>
    // <button className="btn category-btn">❤️ Romance</button>
    // <button className="btn category-btn">🐾 Children</button>
    // </section>
  );
};

export default Categories;
