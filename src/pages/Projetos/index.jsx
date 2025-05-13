import { useEffect, useState } from "react"
import Card from "../../components/Card"
import styles from "./Projetos.module.css"
import {getFunction} from "../../services/api"

function Projetos() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        getFunction()    
            .then((data) => setRepositories(data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            })
        }, [])
        



    
    return(
        <section className={styles.projetos}>
        {
            repositories.length > 0 ? (
                <section className={styles.projetos}>
                    {
                        repositories.map((repo) =>(
                            <Card 
                                key={repo.id} 
                                name={repo.name} 
                                description={repo.description} 
                                html_url={repo.html_url}
                            />
                        ))
                    }
                </section>
            ) : (
                <p>Carregando respositórios...</p>
            )
        }
        </section>
    )
}

export default Projetos