import Image from "next/image";
import Image from 'next/image';

export default async function Product({ params }) {
    const response = await fetch("https://fakestoreapi.com/products/" + params.id);
    const data = await response.json();

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
