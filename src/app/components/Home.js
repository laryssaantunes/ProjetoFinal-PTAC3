"use client"
import React, { useState, useEffect } from 'react';
import { listaDeLivros } from "../api/route";
import "./Home.css";
import Loading from "./Loading";
import ErroGetFetch from "./ErroGetFetch";
import Link from 'next/link';

// Componente funcional para renderizar a lista de livros na Home
const HomeComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Simulando a busca de dados
        setTimeout(() => {
          setData(listaDeLivros);
          setLoading(false);

    // Forçando um erro para testar o componente ErroGetFetch
     /* try {
        throw new Error("Erro forçado na busca de dados");
        setData(listaDeLivros);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }*/

        }, 2000);
      }, []);

      if (loading) {
        return <Loading />;
      }

      if (error) {
        return <ErroGetFetch />;
      }



  return (
    <div className='container'> 
      <h1>Lista de Livros</h1>
      <ul>
        {data.map((livro) => (
          <li key={livro.id}>
            <div className="card-image">
            <img 
              width={10} 
              height={150} 
              src={livro.imagem} 
              alt={`Imagem de ${livro.titulo}`} 
            />
            </div>
            <div>
              <h2>{livro.titulo}</h2>
              <p>Autor: {livro.autor}</p>
              <p>Ano de Publicação: {livro.anoPublicacao}</p>
              <p>Gênero: {livro.genero}</p>
              <Link href={`/livro/${livro.id}`}>
                Ver livro
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeComponent;
