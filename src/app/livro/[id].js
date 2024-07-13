import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { listaDeLivros } from "../api/route";
import Image from 'next/image';
import Link from 'next/link';

const Livro = () => {
    const router = useRouter();
    const { id } = router.query; // Obtém o ID do livro da URL dinâmica

    const [livro, setLivro] = useState(null);

    useEffect(() => {
        // Encontrar o livro na lista pelo ID passado na URL
        if (id && listaDeLivros) {
            const livroEncontrado = listaDeLivros.find(l => l.id === parseInt(id));
            setLivro(livroEncontrado);
        }
    }, [id]);

    if (!livro) {
        return <p>Carregando...</p>;
    }

    return (
        <div className={styles.container}>
            <h1>{livro.titulo}</h1>
            <div className={styles.livroDetalhes}>
                <Image src={livro.imagem} alt={livro.titulo} width={300} height={450} />
                <div className={styles.livroInfo}>
                            <p><strong>Autor:</strong> {livro.autor}</p>
                            <p><strong>Ano de Publicação:</strong> {livro.anoPublicacao}</p>
                            <p><strong>Gênero:</strong> {livro.genero}</p>
                            <p><strong>ID:</strong> {livro.id}</p>
                </div>
            </div>
            <Link href="/livro">
                <a>Voltar para a lista de livros</a>
            </Link>
        </div>
    );
};

export default Livro;