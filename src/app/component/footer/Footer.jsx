import Link from 'next/link'
import SocialMedia from '../socialMedia/SocialMedia'
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="social-media">
        <SocialMedia/>
      </div>
      <div className="divider"></div>
      
        <div className="useful-Links">
          { /* our webistes links */}
      <div className="our-websites">
        <div className="title"><h5>our websites</h5></div>
        <ul className="sites-links">
          <li><a href="">buy accounts</a></li>
          <li><a href="">games blogs</a></li>
          <li><a href="">morocco travel</a></li>
          <li><a href="">naturel products</a></li>
          <li><a href="">netflix accs</a></li>
          <li><a href="">products manager</a></li>

        </ul>
      </div>
       {/* affiliate links */}
      <div className="affiliate-links">
      <div className="title"><h5>useful links</h5></div>
        <ul className="sites-links">
          <li><a href="">buy proxy</a></li>
          <li><a href="">build websites</a></li>
          <li><a href="">buy games</a></li>
          <li><a href="">amazon coupons</a></li>
          <li><a href="">crypto for sale </a></li>
          <li><a href="">investisment</a></li>

        </ul>

      </div>

      {/* affiliate links */}
      <div className="courses-links">
      <div className="title"><h5>learning</h5></div>
        <ul className="sites-links">
          <li><a href="">sales courses</a></li>
          <li><a href="">telegram marketing</a></li>
          <li><a href="">linkedin marketing</a></li>
          <li><a href="">dropshoping</a></li>
          <li><a href="">free courses </a></li>
          <li><a href="">bloging </a></li>

        </ul>

      </div>

      {/* privacy and policy */}
      <div className="courses-links">
      <div className="title"><h5><Link href="/pages/privacypolicy">privacy and policy</Link></h5></div>
        <ul className="sites-links">
          <li><a href="">sales courses</a></li>
          <li><a href="">telegram marketing</a></li>
          <li><a href="">linkedin marketing</a></li>
          <li><a href="">dropshoping</a></li>
          <li><a href="">free courses </a></li>
          <li><a href="">bloging </a></li>

        </ul>

      </div>

      


        </div>

        {/* divider */}
        <div className="divider"></div>

        {/* copyright  */}
        <div className="copyright">
          <p>  All rights reserved by <a href="">ezzghari</a>  © 2024 </p>
       </div>
    </footer>
  )
}

export default Footer
