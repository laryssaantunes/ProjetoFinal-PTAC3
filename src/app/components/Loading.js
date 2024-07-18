import Image from "next/image";
export default function Loading() {
    return(
        <Image
        width={90}
        height={90}
        src="12-dots-scale-rotate.svg"
        alt="Imagem carregando"
        ></Image>
    );
}