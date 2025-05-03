import React from "react";
import NavBar from "./Categories";

const Header = () => {
  return (
    // usando la libreria tailwindcss
    <header className="flex flex-col items-center justify-center gap-4 mt-4">
      <h2 className="text-2xl font-bold p-4 text-center">Explore Market</h2>
    </header>
    // <section className="navbar">
    //   <div className="navbar-container">
    //     <div className="navbar-icons">
    //       <i className="icon">🔍</i>
    //       <i className="icon">🔔</i>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Header;
