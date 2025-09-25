import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Documentación Privada DevOps" description="Acceso restringido">
      <main className={styles.heroBanner}>
        <div className={styles.glassCard}>
          <div className={styles.logoRow}>
            <img src="/img/kubernetes.png" alt="Kubernetes" className={styles.logoIcon} />
            <img src="/img/github.png" alt="GitHub" className={styles.logoIcon} />
          </div>
          <h1 className={styles.titleGradient}>
            DevOps Private Docs
          </h1>
          <p className={styles.description}>
            🚀 Bienvenido a la documentación interna más avanzada.<br />
            <b>Kubernetes</b>, <b>GitLab CI/CD</b>, automatización y mejores prácticas DevOps.<br />
            <span className={styles.accent}>Acceso exclusivo para el equipo.</span>
          </p>
          <div className={styles.buttons}>
            <a href="/docs/intro" className={styles.buttonMain}>
              Acceder a la documentación
            </a>
            <a href="/blog" className={styles.buttonBlog}>
              Blog DevOps
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
