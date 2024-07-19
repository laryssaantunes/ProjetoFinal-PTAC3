import { listaDeLivros } from "../api/route";
import Home from "../page";
import "./Home.css";

// Componente funcional para renderizar a lista de livros na Home
const HomeComponent = () => {
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
