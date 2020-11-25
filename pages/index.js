import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projetos de IoT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Monitoramento do Cultivo</h1>
      <div className={styles.tabelas}>
        <div className={styles.tabela}>
          <h2>Umidade</h2>
          <p>22</p>
        </div>
        <div className={styles.tabela}>
          <h2>Temperatura</h2>
          <p>22°</p>
        </div>
      </div>
    </div>
  )
}
