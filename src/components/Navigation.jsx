import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to='/'><img src="" alt="mtaani foundation logo" /></Link>
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
    </>
  );
};

export default Navigation;
