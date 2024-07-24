"use client";
import React, { useState, useEffect } from 'react';
import { listaDeLivros } from "../api/route";
import "./Home.css";
import Loading from "./Loading";
import ErroGetFetch from "./ErroGetFetch";
import Link from 'next/link';

// Componente funcional para renderizar a lista de livros na Home
const HomeComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [listProduct, setListaProduct] = useState([]);
    const [listComplete, setListComplete] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setData(listaDeLivros);
            setLoading(false);
            setListaProduct(listaDeLivros);
            setListComplete(listaDeLivros);
        }, 2000);
    }, []);

    const orderAz = () => {
        const newList = [...listProduct].sort((a, b) =>
            a.titulo.localeCompare(b.titulo)
        );
        setListaProduct(newList);
    };

    const orderZa = () => {
        let newList = [...listProduct].sort((a, b) =>
            a.titulo.localeCompare(b.titulo)
        );
        newList = newList.reverse();
        setListaProduct(newList);
    };

    const filterList = (text) => {
        if (text.trim() === "") {
            setListaProduct(listComplete);
            return;
        }
        const newList = listComplete.filter((product) =>
            product.titulo.toUpperCase().trim().includes(text.toUpperCase().trim())
        );
        setListaProduct(newList);
    };

    useEffect(() => {
        filterList(search);
    }, [search]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <ErroGetFetch />;
    }

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
