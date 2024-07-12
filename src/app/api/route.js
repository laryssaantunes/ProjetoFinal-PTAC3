import { NextResponse } from "next/server";

export const listaDeLivros = [
    {
        id: 1,
        titulo: "Teto para dois",
        autor: "Beth O'Leary",
        anoPublicacao: "9 de setembro de 2019",
        genero: "Romance",
        imagem: "https://m.media-amazon.com/images/I/51q8j4sXexL._SY445_SX342_.jpg"
    },

    {
        id: 2,
        titulo: "É assim que acaba",
        autor: "Collen Hoover",
        anoPublicacao: "18 de janeiro de 2018",
        genero: "Romance",
        imagem: "https://m.media-amazon.com/images/I/51i7kH+rh9L._SY445_SX342_.jpg"
    },

    {
        id: 3,
        titulo: "É assim que começa",
        autor: "Collen Hoover",
        anoPublicacao: "18 de outubro de 2022",
        genero: "Romance",
        imagem: "https://m.media-amazon.com/images/I/51jiQtSEwDL._SY445_SX342_.jpg"
    },

    {
        id: 4,
        titulo: "O acordo",
        autor: "Elle Kennedy",
        anoPublicacao: "13 de maio de 2016",
        genero: "Romance",
        imagem: "https://m.media-amazon.com/images/I/51mftSv6YmS._SY445_SX342_.jpg"
    },

    {
        id: 5,
        titulo: "O erro",
        autor: "Elle Kennedy",
        anoPublicacao: "2 de setembro de 16",
        genero: "Romance",
        imagem: "https://m.media-amazon.com/images/I/41boxI+MzVL._SY445_SX342_.jpg"
    },

    {
        id: 6,
        titulo: "O jogo",
        autor: "Elle Kennedy",
        anoPublicacao: "27 de fevereiro de 2017",
        genero: "Romance",
        imagem: "https://m.media-amazon.com/images/I/41HJyddMR9L._SY445_SX342_.jpg"
    },

    {
        id: 7,
        titulo: "A conquista",
        autor: "Elle Kennedy",
        anoPublicacao: "26 de maio de 2017",
        genero: "Romance",
        imagem: "https://m.media-amazon.com/images/I/51GcaEGH00L._SY445_SX342_.jpg"
    },

    {
        id: 8,
        titulo: "Leitura de verão",
        autor: "Emily Henry",
        anoPublicacao: "6 de junho de 2022",
        genero: "Romance",
        imagem: "https://m.media-amazon.com/images/I/41bRdJEhzfL._SY445_SX342_.jpg"
    },

    {
        id: 9,
        titulo: "Uma farsa de amor na Espanha",
        autor: "Elena Armas",
        anoPublicacao: "10 de maio de 2022",
        genero: "Romance",
        imagem: "https://m.media-amazon.com/images/I/41sDZUdK+4L._SY445_SX342_.jpg"
    },
    
    {
        id: 10,
        titulo: "Morte no Nilo",
        autor: "Agatha Christie",
        anoPublicacao: "15 de setembro de 2020",
        genero: "misterio",
        imagem: "https://m.media-amazon.com/images/I/41oqA69GTPL._SY445_SX342_.jpg"
    }
];

export async function GET(){
    return NextResponse.json(listaDeLivros)
}