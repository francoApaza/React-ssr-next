import styles from './Menu.module.css'

export default function Menu() {
    return (
      <nav className={styles.menuzada}>
          <ul className={styles.ulli}>
            <li className={styles.ulli}><a className={styles.formando} href="###">Home</a></li>
            <li className={styles.ulli}><a className={styles.formando} href="####">Produtos</a></li>
            <li className={styles.ulli}><a className={styles.formando} href="###">Missão</a></li>
            <li className={styles.ulli}><a className={styles.formando} href="https://nextjs.org/docs/basic-features/built-in-css-support">Links</a></li>
            <li className={styles.ulli}><a className={styles.formando} href="####">Contato</a></li>
          </ul>
      </nav>
    )
  }