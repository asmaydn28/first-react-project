import styles from "../iconBox/iconBox.module.scss"

const iconBox = ({iconClass}) => {
    return(
        <div className={styles.iconBoxClass}>
            <i className={iconClass}></i>
        </div>
        
    )
}

export default iconBox