import { useRouter } from 'next/router';
import Image from 'next/image';

// Exporta a função padrão para a página de detalhes do produto
export default async function Product() {
// Obtém o hook useRouter para acessar informações da URL
    const router = useRouter();
      // Extrai o ID da URL
    const { id } = router.query; // Obtém o id da URL

    // Garante que o ID está disponível antes de buscar os dados
     if (!id) {
        return <p>Loading...</p>;
    }

    // Cria um estado para armazenar os dados do produto
    const [data, setData] = React.useState(null);

    //useEffect para buscar os dados do produto quando o ID mudar
    React.useEffect(() => {
         // Função assíncrona para buscar os dados do produto
        async function fetchProduct() {
             // Faz uma requisição para obter os detalhes do produto usando o ID
            const response = await fetch(`/livro/${livro.id}`);
             // Converte a resposta da API para um objeto JavaScript
            const productData = await response.json();
              // Atualiza o estado com os dados do produto
            setData(productData);
        }

        fetchProduct(); // Chama a função para buscar os dados
    }, [id]); // Dependência do hook useEffect: executa sempre que o ID muda
 
     // Exibe "Loading..." enquanto os dados do produto não estiverem disponíveis
    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <main>
            <h2>{data.title}</h2>
            <p><strong>Autor:</strong> {data.author || 'N/A'}</p>
            <p><strong>Ano de Publicação:</strong> {data.publicationYear || 'N/A'}</p>
            <p><strong>Gênero:</strong> {data.category || 'N/A'}</p>
            <p><strong>ID:</strong> {data.id}</p>
            <div>
                <Image 
                    width={10}  
                    height={150}
                    src={data.image}
                    alt={`Imagem de ${data.title}`}
                />
            </div>
        </main>
    );
}
