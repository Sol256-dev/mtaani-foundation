import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="jumbo">
      <nav>
        <div className="logo">
          <Link to="/">
            <img
              src="../../public/header-logo.png"
              alt="mtaani foundation logo"
            />
          </Link>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="news">News</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
            <li>
              <Link to="get-involved">Get Involved</Link>
            </li>
            <li>
              <button className="donate">Donate</button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="hero"></div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
