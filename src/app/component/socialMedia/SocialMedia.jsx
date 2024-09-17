import "./socialmedia.css"
import { faFacebook, faGit, faGithub, faInstagram, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SocialMedia() {
  return (
    <div className='social-media-links'>
      <a href=""><FontAwesomeIcon width={"15"} icon={faSquareXTwitter} /></a>
      <a href=""><FontAwesomeIcon width={"15"} icon={faLinkedin} /></a>
      <a href=""><FontAwesomeIcon width={"15"} icon={faFacebook} /></a>
      <a href=""><FontAwesomeIcon width={"15"} icon={faGithub} /></a>
      <a href=""><FontAwesomeIcon width={"15"} icon={faInstagram} /></a>
      <a href=""><FontAwesomeIcon width={"15"} icon={faLinkedin} /></a>
    </div>
  )
}

export default SocialMedia
