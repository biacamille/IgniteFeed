import styles from './Post.module.css';

export function Post(){
  
  return(
  <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <img className={styles.avatar} src="https://github.com/vitoropereira.png"/>
        <div className={styles.authorInfo}>
          <strong> Vitor Onofre Pereira</strong>
          <span>Full Stack</span>
      </div>
      </div>

      <time title="16 de Agosto as 11:00" dateTime="2022-16-08 11:00:00">Publicado há 1h</time>
    </header>

    <div className={styles.content}>

    <p>Fala galeraa 👋</p>

   <p>
      Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
  </p>
    
    <p><a href="#">👉 vitor.design/doctorcare</a></p>
    <p> <a href="#">#novoprojeto</a>
        <a href="#">#nlw</a>
        <a href="#">#rocketseat</a>
    </p>
    </div>
  </article>
  )
}