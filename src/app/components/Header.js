import React from 'react';
import styles from "./header.module.css";
import Image from "next/image";

function Header(){
    return(
        <header className={styles.hearder}>
            <div className={styles.imagem}>

            <h1 className={styles.nome}>Loja</h1>
            <div className={styles.iconi}> 🛒 </div>
            <p> Bem Vindo a nossa loja:    Os melhores produtos e os melhores preços </p>
            </div>
        </header>
    );
}
export default Header