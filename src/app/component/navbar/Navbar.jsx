import "./navbar.css"

function Navbar() {
  return (
    <nav>
      <div className="nav-brand"><span>crypto world</span></div>
      <ul className="nav-menu">
        <li><a href="/">home</a></li>
        <li><a href="">news</a></li>
        <li><a href="">invest</a></li>
        <li><a href="">earn money</a></li>
        <li><a href="/pages/courses">courses</a></li>
      </ul>

      <div className="login">
        <button>login/register</button>
      </div>
      
    </nav>
  )
}

export default Navbar
