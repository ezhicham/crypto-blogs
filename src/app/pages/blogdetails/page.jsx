import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../page.module.css";
import "./blogdetails.css"
import { faCalendarDays, faComment, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
function page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className="blog-details-card">
          <div className="blog-card-header">
            <img src="https://i.pinimg.com/736x/bb/1c/bd/bb1cbd93718d8fd05aca8e367dd28bf5.jpg" alt="" />
          

        <div className="blog-card-info flex gap-20">

          <div className="views flex gap-5"><p>500k </p> <FontAwesomeIcon width={"15"} icon={faEye} /></div>
            <div className="views flex gap-5"><p>1k </p> <FontAwesomeIcon width={"15"} icon={faHeart} /></div>
            <div className="views flex gap-5"><p>300 </p> <FontAwesomeIcon width={"15"} icon={faComment} /></div>
          
          <div className="date flex gap-5"><p>12/12/2024  </p> <FontAwesomeIcon width={"15"} icon={faCalendarDays} /></div>
        
        </div>
          </div>
          {/* blog title */}
          <div className="blog-title">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          </div>
          {/* blog  content */}
          <div className="blog-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste alias distinctio eaque voluptatum amet perspiciatis nemo ab soluta voluptatem doloremque, aperiam natus voluptas animi dolorum incidunt unde, nesciunt suscipit sequi iusto. Quia neque architecto rerum cupiditate quod soluta quidem distinctio, nostrum totam, saepe nisi pariatur error aliquam voluptatum porro vel eaque laborum ipsa commodi sequi a omnis dignissimos. Aperiam alias repellendus vel illum, error vitae maiores! Cum ducimus facilis obcaecati dicta ipsa assumenda nobis, repudiandae quam sequi fugit nulla dolores alias maxime eum error, voluptas dolorum unde officiis reprehenderit itaque rerum 
                odio? Quibusdam repellat, expedita maiores eveniet deserunt necessitatibus.</p>
          </div>

        </div>

      </main>
    </div>
  )
}

export default page
