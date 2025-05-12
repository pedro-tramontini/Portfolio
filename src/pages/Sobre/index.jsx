import styles from "./Sobre.module.css"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs  } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";

function Sobre() {
    return(
        <section className={styles.about}>
        
        <div className={styles.information}>
                <div className={styles.img}>
                <img src="/Perfil.jpg" alt="Imagem de perfil" />
                </div>

            <div className={styles.text}>
                <h2>Sobre</h2>
                <p>Sou <span>Pedro Tramontini</span> <br/>
                <strong> Dev Full Stack </strong></p>
                <p>Trabalho com desenvolvimento Web a 1 mês. <br/><br/>
                Sou apaixonado por transformar ideias em realidade digital. <br/><br/>
                Especialização em criação de aplicações dinâmicas e intuitivas, com foco na experiência do usuário.
                </p>
            </div>
        </div>

                <span className={styles.title}>
                    <strong>Techs</strong>
                </span>
                <div className={styles.icons}>
                    <FaHtml5 className={styles.icon}/>
                    <FaCss3Alt className={styles.icon}/>
                    <FaJs className={styles.icon}/>
                    <FaReact className={styles.icon}/>
                    <FaNodeJs className={styles.icon}/>
                    <PiFileSql className={styles.icon}/>
                </div>
            

        </section>
    )
}

export default Sobre