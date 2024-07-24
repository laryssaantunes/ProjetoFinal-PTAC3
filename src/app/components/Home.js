"use client"; // Indica que o código deve ser executado no cliente (navegador)
import React, { useState, useEffect } from 'react'; 
import { listaDeLivros } from "../api/route";
import "./Home.css";
import Loading from "./Loading";
import ErroGetFetch from "./ErroGetFetch";
import Link from 'next/link';

// Componente funcional para renderizar a lista de livros na Home
const HomeComponent = () => {
    const [data, setData] = useState([]);  // Armazena os dados da lista de livros
    const [loading, setLoading] = useState(true); // Indica se os dados estão sendo carregados
    const [error, setError] = useState(false);  // Indica se houve um erro ao buscar os dados
    const [listProduct, setListaProduct] = useState([]); // Armazena a lista de livros que será exibida
    const [listComplete, setListComplete] = useState([]); // Armazena a lista completa de livros para restaurar após filtragem
    const [search, setSearch] = useState("");  // Armazena o texto de busca

    useEffect(() => {
        setTimeout(() => {
           // Simula a busca de dados com um atraso de 2 segundos
            setData(listaDeLivros); // Define os dados da lista de livros
            setLoading(false);  // Define o estado de carregamento como falso
            setListaProduct(listaDeLivros); // Define a lista de produtos a ser exibida
            setListComplete(listaDeLivros); // Define a lista completa de produtos
        }, 2000);
    }, []);


      // Função para ordenar a lista de livros em ordem alfabética (A-Z) pelo título
    const orderAz = () => {
        const newList = [...listProduct].sort((a, b) =>
            a.titulo.localeCompare(b.titulo)
        );
        setListaProduct(newList);
    };

     // Função para ordenar a lista de livros em ordem alfabética inversa (Z-A) pelo título
    const orderZa = () => {
        let newList = [...listProduct].sort((a, b) =>
            a.titulo.localeCompare(b.titulo)
        );
        newList = newList.reverse();
        setListaProduct(newList);
    };

    // Função para filtrar a lista de livros com base no texto de busca
    const filterList = (text) => {
        if (text.trim() === "") {
          // Se o texto de busca estiver vazio, restaura a lista completa
            setListaProduct(listComplete);
            return;
        }

         // Filtra a lista de livros pelo título
        const newList = listComplete.filter((product) =>
            product.titulo.toUpperCase().trim().includes(text.toUpperCase().trim())
        );
        setListaProduct(newList);
    };

    //useEffect para atualizar a lista filtrada sempre que o texto de busca mudar
    useEffect(() => {
        filterList(search);
    }, [search]);


     // Renderiza o componente de carregamento enquanto os dados estão sendo buscados
    if (loading) {
        return <Loading />;
    }

    // Renderiza o componente de erro se houver um erro ao buscar os dados
    if (error) {
        return <ErroGetFetch />;
    }

    // Renderiza uma mensagem de carregamento se a lista de produtos estiver vazia
    if (listProduct.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="fundo">
                <button className="button" onClick={orderAz}>AZ</button>
                <button className="button" onClick={orderZa}>ZA</button>
                {/* Add buttons for ordering by price if needed */}
            </div>
            <h1>Lista de Livros</h1>
            <ul>
                {listProduct.map((livro) => (
                    <li key={livro.id}>
                        <div className="card-image">
                            <img
                                width={100}
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
