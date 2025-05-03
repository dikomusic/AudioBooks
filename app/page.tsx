"use client"

import Book_list from "@/componentes/Book_list";
import Categories from "@/componentes/Categories";
import Header from "@/componentes/Header";
import { URL_API } from "@/constanst";
import { useFetch } from "@/hook/useFetch";

export default function Home() {
  // const libros = await fetch(
  //   "https://680a56af1f1a52874ce02070.mockapi.io/libros"
  // ).then((res) => res.json());

  // const [libros, setLibros] = useState<any>([]);

  // useEffect(() => {
  //   const fetchLibros = async () => {
  //     const response = await fetch(
  //       "https://680a56af1f1a52874ce02070.mockapi.io/libros"
  //     );
  //     const data = await response.json();
  //     setLibros(data);
  //   };
  //   fetchLibros();
  // }, []);

  // use un customHook para obtener los libros
  const { libros, loading } = useFetch(`${URL_API}/libros`);

  return (
    <div className="bg-orange-50 pading">
      <Header />
      <Categories />
      <div className="pading grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {loading && <p>Loading...</p>}
        {libros?.map((libro: any) => (
          <Book_list key={libro.id} libro={libro} />
        ))}
      </div>
    </div>
  );
}
