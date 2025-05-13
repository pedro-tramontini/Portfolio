import { useEffect, useState } from "react"
import Card from "../../components/Card"
import styles from "./Projetos.module.css"

function Projetos() {
    
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/pedro-tramontini/repos')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
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