import React, { useState } from 'react';
import Head from 'next/head';

import { ThingSpeak } from './api/ThingSpeak';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [estado, setEstado] = useState(true);
  ThingSpeak();
  const temperatura = 22;
  const umidadeAr = 22;
  const umidadeSolo = 22;
  return (
    <div className={styles.container}>
    <Head>
      <title>Projetos de IoT</title>
      <link rel="icon" href="https://teams.microsoft.com/api/mt/amer/beta/users/8:orgid:b5c3557e-b60e-4cef-a5f9-cbba2ffcc2e2/profilepicturev2?displayname=LUIZ%20CARLOS%20QUERINO%20FILHO&size=HR32x32" />
    </Head>
      <div className={styles.header}>
        <h1 className={estado ? '' : styles.titleOff}>Monitoramento do Cultivo</h1>
        <input type="checkbox" hidden="hidden" id="username" />
        <label className={styles.switch} for="username" onClick={estado ? () => setEstado(false) : () => setEstado(true)}></label>
      </div>
      <div className={styles.tabelas}>
        <div className={estado ? styles.tabela : styles.tabelaOff}>
          <h2>Temperatura</h2>
          <p>{estado ? `${temperatura} °` : '--'}</p>
        </div>
        <div className={estado ? styles.tabela : styles.tabelaOff}>
          <h2>Umidade do ar</h2>
          <p>{estado ? umidadeAr : '--'}</p>
        </div>
        <div className={estado ? styles.tabela : styles.tabelaOff}>
          <h2>Umidade do Solo</h2>
          <p>{estado ? umidadeSolo : '--'}</p>
        </div>
      </div>
    </div>
  )
}
