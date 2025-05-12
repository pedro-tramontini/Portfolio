import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa6";
import styles from "./Contatos.module.css"

function Contatos() {
    return(
                <section className={styles.contatos}>
                    <h2>Contatos</h2>
                    <div className={styles.informacoes}>
                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre.</p>
                    </div>

                    <div className={styles.icones}>
                        <a 
                            href="mailto:pedroh.tramontini@gmail.com" 
                            target="_blank" 
                            rel="noopener noreferrer">
                        <CiMail className={styles.icone} />
                        </a>
                        <a 
                            href="https://www.instagram.com/pedroh_tramontini/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                        <FaInstagram className={styles.icone}/>
                        </a>
                        
                        <a 
                            href="https://github.com/pedro-tramontini" 
                            target="_blank" 
                            rel="noopener noreferrer">
                        <VscGithubAlt className={styles.icone}/>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/pedro-henrique-barbosa-tramontini-8167282" 
                            target="_blank" 
                            rel="noopener noreferrer">
                        <FaLinkedinIn className={styles.icone}/>
                        </a>
                    </div>
                </section>
    )
}

export default Contatos