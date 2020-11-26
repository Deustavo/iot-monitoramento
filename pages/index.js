import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [estado, setEstado] = useState(true);
  const [temperatura, setTemperatura] = useState();
  const [umidadeAr, setUmidadeAr] = useState();
  const [umidadeSolo, setUmidadeSolo] = useState();
  useEffect(() => {
    Promise.all([1,2,3].map(id => {
      fetch(`https://api.thingspeak.com/channels/1228925/fields/${id}.jsonx?Results=2`)
        .then(resp => resp.json())
          .then((resp) => setTemperatura(resp))
            .catch((error) => setTemperatura(undefined))
    }))
  }, [])
  return (
    <div className={styles.container}>
    <Head>
      <title>Projetos de IoT</title>
      <link rel="icon" href="https://teams.microsoft.com/api/mt/amer/beta/users/8:orgid:b5c3557e-b60e-4cef-a5f9-cbba2ffcc2e2/profilepicturev2?displayname=LUIZ%20CARLOS%20QUERINO%20FILHO&size=HR32x32" />
    </Head>
      <div className={styles.header}>
        <h1 className={estado ? '' : styles.titleOff}>Monitoramento do cultivo agora</h1>
        <input type="checkbox" hidden="hidden" id="username" />
        <label className={styles.switch} htmlFor="username" onClick={estado ? () => setEstado(false) : () => setEstado(true)}></label>
      </div>
      <div className={styles.tabelas}>
        <div className={estado ? styles.tabela : styles.tabelaOff}>
          <h2>Temperatura</h2>
          <p>{estado ? temperatura !== undefined ? `${temperatura} °` : '??' : '--'}</p>
        </div>
        <div className={estado ? styles.tabela : styles.tabelaOff}>
          <h2>Umidade do Ar</h2>
          <p>{estado ? umidadeAr !== undefined ? `${umidadeAr}` : '??' : '--'}</p>
        </div>
        <div className={estado ? styles.tabela : styles.tabelaOff}>
          <h2>Umidade do Solo</h2>
          <p>{estado ? umidadeSolo !== undefined ? `${umidadeSolo}` : '??' : '--'}</p>
        </div>
      </div>
      {temperatura === undefined ? <h1 className={styles.error}>Falha ao se comunicar com o Thing Speak</h1> : null}
      <div className={styles.tabelaDados}>
        <h1>Dados históricos</h1>
        <div>
          <div className={styles.tabelaTitulos}>
            <p>Horario</p>
            <p>Temperatura</p>
            <p>Umidade do Ar</p>
            <p>Umidade do Solo</p>
          </div>
          <div className={styles.tabelaColunas}>
            <div>
              {
                  temperatura?.feeds?.flatMap((item) => {
                    return(
                      <p>{item.field1}</p>
                    )
                  })
              }
            </div>
            <div>
              {
                  temperatura?.feeds?.flatMap((item) => {
                    return(
                      <p>{item.field1}</p>
                    )
                  })
              }
            </div>
            <div>
              {
                  temperatura?.feeds?.flatMap((item) => {
                    return(
                      <p>{item.field1}</p>
                    )
                  })
              }
            </div>
            <div>
              {
                  temperatura?.feeds?.flatMap((item) => {
                    return(
                      <p>{item.field1}</p>
                    )
                  })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
