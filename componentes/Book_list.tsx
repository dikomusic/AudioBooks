import React from "react";

const Book_list = ({ libro }: any) => {
  return (
    // usando la libreria tailwindcss
    <div
    className="pading flex flex-col items-center justify-center gap-4 p-4 bg-orange-100 rounded-lg shadow"
    >
      {/* uso de <img /> y no <Image /> por que la imagen viene de una api, no localmente */}
      <img
        className="w-full max-w-80 h-96 object-cover rounded-lg"
        src={libro.portada}
        alt=""
      />
      <h2 className="text-xl font-bold">{libro.titulo}</h2>
      <p className="text-gray-600">{libro.autor}</p>
      <div className="flex justify-between items-center gap-4">
        <p className="text-gray-600 font-bold text-2xl">{libro.precio}</p>
        <button className="pading-btn bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 transition-all duration-300 cursor-pointer active:opacity-50">
          Comprar
        </button>
      </div>
    </div>

    // <section className="book-list">
    //   <div className="book-card" role="article">
    //     <img src={libro.portada} alt="" />
    //     {/* <Image
    //       src={libro.portada} // Ruta absoluta desde la carpeta public
    //       alt="The Republic"
    //       className="book-image"
    //       width={200}
    //       height={300}
    //     /> */}
    //     <h3 className="book-title">{libro.titulo}</h3>
    //     <p className="book-author">{libro.autor}</p>
    //     <p className="book-price">{libro.precio}</p>
    //     <button className="btn buy-btn">Buy</button>
    //   </div>
    // </section>
  );
};

export default Book_list;
