'use client'
import React, { useState, useEffect } from 'react';
import { listaDeLivros } from "../api/route";
import "./Home.css";
import Loading from "./Loading";

// Componente funcional para renderizar a lista de livros na Home
const HomeComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulando a busca de dados
        setTimeout(() => {
          setData(listaDeLivros);
          setLoading(false);
        }, 2000);
      }, []);
    
      if (loading) {
        return <Loading />;
      }


    return (
        <div className="container">
            <h1>Bem-vindo à nossa Livraria</h1>
            <ul>
                {listaDeLivros.map(livro => (
                    <li key={livro.id}>
                        <div className="card-image">
                        <img src={livro.imagem} alt={livro.titulo} style={{ maxWidth: '100px', maxHeight: '150px', marginRight: '10px' }} />
</div>
                        <div >

                            <h2>{livro.titulo}</h2>
                            <p>Autor: {livro.autor}</p>
                            <p>Ano de Publicação: {livro.anoPublicacao}</p>
                            <p>Gênero: {livro.genero}</p>
                            <p><strong>ID:</strong> {livro.id}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomeComponent;
