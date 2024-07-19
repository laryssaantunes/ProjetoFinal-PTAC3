import Image from "next/image";
import "./Loading.css";
export default function Loading() {
    return(
        < div className="loading-container">
        <Image
        width={90}
        height={90}
        src="12-dots-scale-rotate.svg"
        alt="Imagem carregando"
        ></Image>
        </div>
    );
}