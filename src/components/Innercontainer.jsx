import styles from "./Innercontainer.module.css";
export default function Innercontainer({children}){
    return(
        <div className={styles.innercontainer}>{children}</div>
    )
}
