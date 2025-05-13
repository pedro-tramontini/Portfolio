import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa"
import styles from "./DynamicIcon.module.css"




function DynamicIcon() {


    
    return(
        <div className={styles.card_icones}>
            <FaCss3Alt />
            <FaHtml5 />
            <FaJs />
            <FaReact />
        </div>
    )
}

export default DynamicIcon