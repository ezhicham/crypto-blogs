import React from 'react'
import styles from "../../../page.module.css";
import "./addblog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faUpload } from '@fortawesome/free-solid-svg-icons';
function page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
    <div className='blog-form-section'>
    <h1>add blog is just for admine</h1>
        <div className="message-attention ">
          <ul>
            <li>do not publish any thing related about Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, numquam. </li>
            <li>do not publish any thing related about Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eligendi.</li>
            
          </ul>
        </div>
        <img src="/images/rabbitlike.png" width={"200"} alt="" />


        <form action="">
             {/* input fields  */}
             <div className="admin-input">
          <label htmlFor="">enter  writer name</label>
          <input type="text" placeholder='Example:hicham , hassan , hakim' />
         </div>

              {/* input fields  */}
              <div className="img-input">
          <label htmlFor=""><span>upload blog image</span> <FontAwesomeIcon width={"30"} icon={faImage} /></label>
          <input  type="file" />
         </div>

         {/* input fields  */}
         <div className="keywords-input">
          <label htmlFor="">enter article keywords </label>
          <input type="text" placeholder='Example: cyrpto , airdrop, blum, earn coins' />
         </div>
          {/* input fields  */}
         <div className="title-input">
          <label htmlFor="">enter  blog title</label>
          <input type="text" placeholder='Example:what is the best crypto projects comming 2025?' />
         </div>

           {/* input fields  */}
           <div className="content-input">
          <label htmlFor="">enter  article content</label>
          <textarea name="" id="" placeholder='Example:the best airdrop projects  comming in 2025 is blum . so i will teach you how you can earn from this airdrop step by step .... '></textarea>
         </div>
  
          <button><p>publish article</p><FontAwesomeIcon width={"30"} icon={faUpload} /></button>
        </form>
    </div>
      </main>
      </div>
  )
}

export default page
