import { NextResponse } from "next/server";
import { listaDeLivros } from "../api/route";

// Define uma função assíncrona GET para lidar com a requisição GET
export async function GET(req){
     // Extrai o ID da URL da requisição
    const id  = parseInt(req.url.split('/api/')[1]); // Converte a parte da URL após '/api/' para um número inteiro
    let objeto = null;  // Inicializa a variável objeto como null

     // Percorre a lista de livros para encontrar o livro com o ID correspondente

    listaDeLivros.forEach((obj)=>{
        if(obj.id == id){ // Verifica se o ID do livro corresponde ao ID extraído da URL
            objeto = obj // Atribui o objeto livro correspondente à variável objeto
        }
    });

     // Retorna a resposta em formato JSON com o objeto livro encontrado
    return NextResponse.json(objeto);
}

