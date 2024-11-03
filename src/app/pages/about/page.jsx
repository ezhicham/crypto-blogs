import React from 'react'
import styles from "../../page.module.css";
import "./about.css"
function page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <section className="intro-text-about">
          <h1>who are we?</h1>
          <p>we are a  groups of young our goals is help  you to earn money sit amet, consectetur adipisicing elit. Vitae quas
            voluptate praesentium deserunt minus corrupti
            quaerat doloremque sunt delectus recusandae Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nostrum nam accusamus labore quas veli
            t autem voluptate, debitis, repudiandae cum adipisci fugit placeat!
            Repellendus, dolor a corporis tenetur pariatur voluptatem consectetur
            fugit in odio nihil quasi, officiis iusto facilis fuga sapiente!.
          </p>

          <img style={{margin:"auto"}} src="/images/rabbit.png" width={"500"} alt="" />
      
        

        </section>
        </main>
        </div>
  )
}

export default page
