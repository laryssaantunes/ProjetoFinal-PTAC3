import { listaDeLivros } from "../api/route";

// Componente funcional para renderizar a lista de livros na Home
const Home = () => {
    return (
        <div>
            <h1>Bem-vindo à nossa Livraria</h1>
            <ul>
                {listaDeLivros.map(livro => (
                    <li key={livro.id}>
                        <img src={livro.imagem} alt={livro.titulo} style={{ maxWidth: '100px', maxHeight: '150px', marginRight: '10px' }} />
                        <div>
                            <h2>{livro.titulo}</h2>
                            <p>Autor: {livro.autor}</p>
                            <p>Ano de Publicação: {livro.anoPublicacao}</p>
                            <p>Gênero: {livro.genero}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;