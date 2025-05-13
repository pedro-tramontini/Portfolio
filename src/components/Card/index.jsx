
import styles from "./Card.module.css"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"
import DynamicIcon from "../DynamicIcon"

function Card({name, description, html_url}) {
    return(
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <DynamicIcon />
                </div>
                <a href={html_url} className={styles.botao} target="_blank" rel="nopenner norefferer">
                    <BsArrowRight />
                </a>
            </div>
        </section>
    )
}

export default Card