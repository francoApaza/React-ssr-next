import Button from '../Button'
import styles from './Section.module.css'

export default function Section() {
    return (
      <div className={styles.centralizar}>
        <h1 className={styles.centralizar}>Bem vindo ao Next.js!</h1>

        
        <p className={styles.centralizar} placeholder="Não digite nada...">conteúdo 1</p>
        <p className={styles.centralizar} placeholder="Digite seu Nome...">conteúdo 2</p>
        <p className={styles.centralizar} placeholder="Digite seu Sobre nome...">conteúdo 3</p>
        <h3 className={styles.centralizar} placeholder="Digite seu Email...">conteúdo 4</h3>
        <p className={styles.centralizar} type="password" placeholder="Digite sua senha...">conteúdo 5</p>
        <button className={styles.btn}>Enviar </button>
        

        
        

        
      
      </div>
    )
  }