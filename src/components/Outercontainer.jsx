import styles from "./Outercontainer.module.css";
export default function Outercontainer({children}){
    return(
        <div className={styles.Bigcontainer}>{children}</div>
    )
}
