import "./courses.css"
import styles from "../../page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin, faSlack, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faAngleRight, faClock, faLitecoinSign, faSortDown, faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
function page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <section className="intro-text-courses">
          <h1>+9884 courses about crypto in trading in airdrop and more fields you </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas
            voluptate praesentium deserunt minus corrupti
            quaerat doloremque sunt delectus recusandae Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nostrum nam accusamus labore quas veli
            t autem voluptate, debitis, repudiandae cum adipisci fugit placeat!
            Repellendus, dolor a corporis tenetur pariatur voluptatem consectetur
            fugit in odio nihil quasi, officiis iusto facilis fuga sapiente!.
          </p>
          {/* the partners section */}
          <section className="our-partners">
            <h2>our partners</h2>
            <div className="parternes">
              <a href=""><FontAwesomeIcon  icon={faSlack} /> <p>binance</p></a>
              <a href=""><FontAwesomeIcon  icon={faStackOverflow} /><p> trade</p></a>
              <a href=""><FontAwesomeIcon icon={faBitcoin} /><p>coursera</p></a>
              <a href=""><FontAwesomeIcon  icon={faLitecoinSign} /><p>udemi</p></a>
            </div>
          </section>

        </section>

        {/*================ courses section======================= */}
        <section className="coursers-section">
          <div className="title">
            <h2>best courses</h2>
            <p>this is the best courses ever to earn and invest in  crytpo Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Impedit architecto veniam
              porro qui nemo alias reprehenderit culpa laboriosam ullam facilis.
            </p>

          </div>
          {/* filter section */}
          <div className="filter-catigories">
            {/* ======btn to show the drop down menu fo type of courses== */}
            <div className="drop-down">

              <div className="drop-btn flex gap-5">
                <span>courses type</span>
                <FontAwesomeIcon width={"15"} icon={faAngleDown} />
              </div>

              {/* drop down menu */}
              <ul className="drop-menu">
                <li><a href="">airdrops</a></li>
                <li><a href="">trading</a></li>
                <li><a href="">bitcoin</a></li>
                <li><a href="">binance airdrop</a></li>
                <li><a href="">mega drop</a></li>
                <li><a href="">web 3</a></li>

              </ul>
            </div>


            {/*  all courses btn*/}
            <a href="" className="flex gap-5"> <p>view all</p> <FontAwesomeIcon width={"10"} icon={faAngleRight} /> </a>
          </div>


          {/* \\courses cards  */}
          <div className="courses-cards">
            {/* =======course card details==== */}
            <div className="card">
              <img src="https://i.pinimg.com/564x/d0/ed/6f/d0ed6f02e31f1e4aa0d45d113d1dee1e.jpg" alt="" />
              <div className="desc">
                <h3>airdrop</h3>
                <p>this course talke about the best way to find airdrop
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, ad!
                </p>
              </div>
              <div className="info flex between">
                <div className="author">  <p>author:jhoon canis</p>  </div>

                <div className="price"><p>55$</p></div>
              </div>

              <div className="flex between">
                <div className="hours"><FontAwesomeIcon width={"15"} icon={faClock} /> <span>: 22h</span></div>

                <div className="stars-rating">
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                </div>
              </div>


              <div className="btn-link"><a href="">discover</a></div>
            </div>
              {/* =======course card details==== */}
              <div className="card">
              <img src="https://i.pinimg.com/736x/e3/2f/97/e32f976afe606acbc01813613e29893d.jpg" alt="" />
              <div className="desc">
                <h3>airdrop</h3>
                <p>this course talke about the best way to find airdrop
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, ad!
                </p>
              </div>
            <div className="all-infon">
            <div className="info flex between">
                <div className="author">  <p>author:jhoon canis</p>  </div>

                <div className="price"><p>55$</p></div>
              </div>

              <div className="flex between">
                <div className="hours"><FontAwesomeIcon width={"15"} icon={faClock} /> <span>: 22h</span></div>

                <div className="stars-rating">
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                </div>
              </div>
              <div className="btn-link"><a href="">discover</a></div>

              
            </div>
            </div>  {/* =======course card details==== */}
            <div className="card">
              <img src="https://i.pinimg.com/736x/b6/3c/53/b63c535f1c05f50c0dd18bac71b82a2f.jpg" alt="" />
              <div className="desc">
                <h3>airdrop</h3>
                <p>this course talke about the best way to find airdrop
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, ad!
                </p>
              </div>
              <div className="info flex between">
                <div className="author">  <p>author:jhoon canis</p>  </div>

                <div className="price"><p>55$</p></div>
              </div>

              <div className="flex between">
                <div className="hours"><FontAwesomeIcon width={"15"} icon={faClock} /> <span>: 22h</span></div>

                <div className="stars-rating">
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                </div>
              </div>


              <div className="btn-link"><a href="">discover</a></div>
            </div>  {/* =======course card details==== */}
            <div className="card">
              <img src="https://i.pinimg.com/736x/62/e3/78/62e378dadaed4e8e61273dd2c3b224a2.jpg" alt="" />
              <div className="desc">
                <h3>airdrop</h3>
                <p>this course talke about the best way to find airdrop
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, ad!
                </p>
              </div>
              <div className="info flex between">
                <div className="author">  <p>author:jhoon canis</p>  </div>

                <div className="price"><p>55$</p></div>
              </div>

              <div className="flex between">
                <div className="hours"><FontAwesomeIcon width={"15"} icon={faClock} /> <span>: 22h</span></div>

                <div className="stars-rating">
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                </div>
              </div>


              <div className="btn-link"><a href="">discover</a></div>
            </div>  {/* =======course card details==== */}
            <div className="card">
              <img src="https://i.pinimg.com/736x/2d/04/38/2d04388674c0af3d19a06a17dede65d8.jpg" alt="" />
              <div className="desc">
                <h3>airdrop</h3>
                <p>this course talke about the best way to find airdrop
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, ad!
                </p>
              </div>
              <div className="info flex between">
                <div className="author">  <p>author:jhoon canis</p>  </div>

                <div className="price"><p>55$</p></div>
              </div>

              <div className="flex between">
                <div className="hours"><FontAwesomeIcon width={"15"} icon={faClock} /> <span>: 22h</span></div>

                <div className="stars-rating">
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                </div>
              </div>


              <div className="btn-link"><a href="">discover</a></div>
            </div>  {/* =======course card details==== */}
            <div className="card">
              <img src="https://i.pinimg.com/564x/cd/4b/7b/cd4b7bdc2915e8d5b4b2b47a87785061.jpg" alt="" />
              <div className="desc">
                <h3>airdrop</h3>
                <p>this course talke about the best way to find airdrop
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, ad!
                </p>
              </div>
              <div className="info flex between">
                <div className="author">  <p>author:jhoon canis</p>  </div>

                <div className="price"><p>55$</p></div>
              </div>

              <div className="flex between">
                <div className="hours"><FontAwesomeIcon width={"15"} icon={faClock} /> <span>: 22h</span></div>

                <div className="stars-rating">
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                  <FontAwesomeIcon width={"10"} icon={faStar} />
                </div>
              </div>


              <div className="btn-link"><a href="">discover</a></div>
            </div>
          </div>

        </section>


      </main>
    </div>
  )
}

export default page
