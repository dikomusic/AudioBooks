// use client por que es un hook que se ejecuta en el cliente, no en el servidor (navegador)
"use client"

// importaciones de la libreria de react
import { useEffect, useState } from "react";

// exportacion de la funcion useFetch
export const useFetch = (url: string) => {
  // estados
  const [libros, setLibros] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect para obtener los libros
  useEffect(() => {
    // se pone true para que se muestre el loading
    setLoading(true);
    
    // funcion asincrona para obtener los libros (Asincrona por que la peticion tarda, y no quiero que un codigo se ejecute antes de que me llege la data)
    const fetchLibros = async () => {
      // espera a que se realice la peticion a la api
      const res = await fetch(url);
      // espera a que la respuesta de la api sea convertida a json
      const data = await res.json();
      // setea los libros (pone los datos obtenidos de la api a travez de fetch en el estado libros)
      setLibros(data);
      // se pone false para que se oculte el loading
      setLoading(false);
    };
  
    // se llama a la funcion fetchLibros() para obtener los libros
    fetchLibros();
    // el [] es para que se ejecute solo una vez, si lo quito, se ejecutara cada vez que se renderize el componente (loop infinito)
  }, []);

  return { libros, loading };
};

