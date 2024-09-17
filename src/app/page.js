import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       

       {/* heroo section  */}
       <div className="hero-section">

        {/* texts hero */}
        <div className="texts">
          <h1>crytpo world : learn , earn , invest , us the best  </h1>
          <p>🚀 Crypto World: Learn, Earn, Invest! | 💡 Master the crypto market with us and unlock endless opportunities! 💰 Start earning, grow your wealth, 
            and invest smartly with the best platform. 🏆 Join the revolution today! 🌟.</p>
            <div className="btns">
            <button>free courses <FontAwesomeIcon width={"15"} icon={faHandHoldingDollar} /></button>
            <a className="link flex gap"> <span>discover blogs </span><FontAwesomeIcon width={"15"} icon={faArrowRight} /></a>
            </div>
            <div className="analytics">
              <div className="analytic-card">
                <h5>users</h5>
                <p>+34000 </p>
              </div>

              <div className="analytic-card">
                <h5>coursers</h5>
                <p>+34000 </p>
              </div>

              <div className="analytic-card">
                <h5>blogs & articles</h5>
                <p>+34000 </p>
              </div>
            </div>
        </div>

        {/* trend  crytpo currency  */}
        <div className="crypto-currency">
          <div className="table-currency">
            <div className="header-card">
              <h4>popular crypto</h4> 
              <p className="date">16-9-2024</p>
              <a href="">discover more</a>
            </div>
            <div className="currency-cards">
            {/* crypto currency live  */}
            <div className="card">
              <div className="currency-icon-name flex gap-5">
                <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <circle cx="16" cy="16" r="16" fill="#f7931a"/>
  <path fill="#fff" d="M19.918 17.422c.23-1.538-.94-2.368-2.536-2.923l.518-2.079-1.263-.315-.504 2.022c-.332-.082-.673-.159-1.014-.236l.507-2.035-1.262-.314-.518 2.08a46.98 46.98 0 01-.809-.193l-.001-.004-1.744-.434-.336 1.351s.94.216.92.23c.514.129.607.47.592.741l-.592 2.377c.035.009.081.021.132.04l-.134-.033-.829 3.33c-.063.156-.224.392-.585.304.012.017-.921-.231-.921-.231l-.628 1.449 1.644.41c.305.076.602.156.9.233l-.521 2.097 1.262.314.518-2.079c.344.093.681.18 1.011.263l-.517 2.072 1.263.314.522-2.094c2.157.408 3.779.243 4.46-1.704.55-1.577-.027-2.49-1.164-3.084.827-.191 1.452-.739 1.621-1.872zm-3.012 4.083c-.426 1.577-3.307.723-4.241.509l.755-3.03c.933.231 3.927.688 3.486 2.521zm.426-4.16c-.39 1.562-2.79.77-3.567.576l.69-2.772c.777.193 3.28.555 2.877 2.196z"/>
</svg>
</div>
                <p className="name">bitcoin</p>
                </div>
                <span className="price">69.655 $</span>
                <span className="percentage-decr">-9.76%</span>

            </div>
            {/* crypto currency live  */}
            <div className="card">
              <div className="currency-icon-name flex gap-5">
                <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <circle cx="16" cy="16" r="16" fill="#f7931a"/>
  <path fill="#fff" d="M19.918 17.422c.23-1.538-.94-2.368-2.536-2.923l.518-2.079-1.263-.315-.504 2.022c-.332-.082-.673-.159-1.014-.236l.507-2.035-1.262-.314-.518 2.08a46.98 46.98 0 01-.809-.193l-.001-.004-1.744-.434-.336 1.351s.94.216.92.23c.514.129.607.47.592.741l-.592 2.377c.035.009.081.021.132.04l-.134-.033-.829 3.33c-.063.156-.224.392-.585.304.012.017-.921-.231-.921-.231l-.628 1.449 1.644.41c.305.076.602.156.9.233l-.521 2.097 1.262.314.518-2.079c.344.093.681.18 1.011.263l-.517 2.072 1.263.314.522-2.094c2.157.408 3.779.243 4.46-1.704.55-1.577-.027-2.49-1.164-3.084.827-.191 1.452-.739 1.621-1.872zm-3.012 4.083c-.426 1.577-3.307.723-4.241.509l.755-3.03c.933.231 3.927.688 3.486 2.521zm.426-4.16c-.39 1.562-2.79.77-3.567.576l.69-2.772c.777.193 3.28.555 2.877 2.196z"/>
</svg>
</div>
                <p className="name">solana</p>
                </div>
                <span className="price">8.695 $</span>
                <span className="percentage-inc">+9.76%</span>

            </div>
            {/* crypto currency live  */}
            <div className="card">
              <div className="currency-icon-name flex gap-5">
                <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
  <path fill="#8C8C8C" d="M12 0L1.65 9.27l10.35 6.01L12 24l10.35-8.72L12 0zM12 2.6l8.7 5.03L12 12.8 3.3 7.63 12 2.6zm-3.6 9.48L12 16.66l3.6-4.54-3.6-2.08-3.6 2.08 3.6 4.54z"/>
</svg>

           </div>
                <p className="name">eth</p>
                </div>
                <span className="price">5.35 $</span>
                <span className="percentage-decr">-0.96%</span>

            </div>

              {/* crypto currency live  */}
              <div className="card">
              <div className="currency-icon-name flex gap-5">
                <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
  <path fill="#8C8C8C" d="M12 0L1.65 9.27l10.35 6.01L12 24l10.35-8.72L12 0zM12 2.6l8.7 5.03L12 12.8 3.3 7.63 12 2.6zm-3.6 9.48L12 16.66l3.6-4.54-3.6-2.08-3.6 2.08 3.6 4.54z"/>
</svg>

           </div>
                <p className="name">dogs</p>
                </div>
                <span className="price">1.05 $</span>
                <span className="percentage-inc">+222.96%</span>

            </div>
            </div>
          </div>
        </div>

       </div>
      {/* features of our websites  */}

      <div className="platform-features">
        <div className="title">
          <h2>what you will benifite from our blog website?</h2>
          </div>
          {/* features cards */}
          <div className="features-cards">
            <div className="card"><p> 💎  we will help you to earn money 💰 from crypto and trading 📈 , airdrop and more Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut
               quasi reprehenderit possimus quidem nobis non minus. Officia, veniam aliquam!</p> </div>
          </div>
      </div>

       {/*========== blogs================  */}

     <div className="blogs-section">
      <div className="blogs-cards">
        {/* ==========blog card ================= */}
        <div className="card">
          <div className="image-blog">
            <img src="https://i.pinimg.com/564x/0d/2c/b8/0d2cb8e8648fd6bc43a93ddbbae077fe.jpg" alt="" /></div>
          <div className="blog-text">
          <h3>what is airdrop?</h3>
          <p>An airdrop in the cryptocurrency world refers to the distribution 
            of free tokens or coins to the wallets of users,
             often as a promotional tactic to raise awareness or reward.</p>
            <button>learn more</button>
          </div>
        </div>

        {/* ==========blog card ================= */}
        <div className="card">
          <div className="image-blog">
            <img src="https://i.pinimg.com/564x/bc/fe/4d/bcfe4d8c73f3da39e076408f86f249d7.jpg" alt="" /></div>
          <div className="blog-text">
          <h3>what is airdrop?</h3>
          <p>An airdrop in the cryptocurrency world refers to the distribution 
            of free tokens or coins to the wallets of users,
             often as a promotional tactic to raise awareness or reward.</p>
            <button>learn more</button>
          </div>
        </div>
        {/* ==========blog card ================= */}
        <div className="card">
          <div className="image-blog">
            <img src="https://i.pinimg.com/736x/3a/3e/00/3a3e007f9bc7ec2d2d1c761cc9486edc.jpg" alt="" /></div>
          <div className="blog-text">
          <h3>what is airdrop?</h3>
          <p>An airdrop in the cryptocurrency world refers to the distribution 
            of free tokens or coins to the wallets of users,
             often as a promotional tactic to raise awareness or reward.</p>
            <button>learn more</button>
          </div>
        </div>
        {/* ==========blog card ================= */}
        <div className="card">
          <div className="image-blog">
            <img src="https://i.pinimg.com/564x/0d/2c/b8/0d2cb8e8648fd6bc43a93ddbbae077fe.jpg" alt="" /></div>
          <div className="blog-text">
          <h3>what is airdrop?</h3>
          <p>An airdrop in the cryptocurrency world refers to the distribution 
            of free tokens or coins to the wallets of users,
             often as a promotional tactic to raise awareness or reward.</p>
            <button>learn more</button>
          </div>
        </div>
        {/* ==========blog card ================= */}
        <div className="card">
          <div className="image-blog">
            <img src="https://i.pinimg.com/564x/0d/2c/b8/0d2cb8e8648fd6bc43a93ddbbae077fe.jpg" alt="" /></div>
          <div className="blog-text">
          <h3>what is airdrop?</h3>
          <p>An airdrop in the cryptocurrency world refers to the distribution 
            of free tokens or coins to the wallets of users,
             often as a promotional tactic to raise awareness or reward.</p>
            <button>learn more</button>
          </div>
        </div>
      </div>
     </div>

      </main>
      
    </div>
  );
}
