import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function MainFooter() {
  return (
    <section className="main-footer">
      <div className="container">
        <div className="footer-one flex">
          <ul className="linkss flex ">
            <li>
              <Link>About us</Link>{" "}
            </li>
            <li>
              {" "}
              <Link>Blog</Link>{" "}
            </li>
            <li>
              {" "}
              <Link>Press</Link>{" "}
            </li>
            <li>
              {" "}
              <Link>IOS App</Link>
            </li>

            <li>
              {" "}
              <Link>Android App</Link>
            </li>
          </ul>
          <ul className="pagess flex">
            <li>
              <Link>
                <TiSocialFacebook />
              </Link>
            </li>
            <li>
              <Link>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link>
                <TiSocialGooglePlus />
              </Link>
            </li>
            <li>
              <Link>
                <FaInstagramSquare />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-two">
          <p>Copyright &#169;2024 by Omnifood. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default MainFooter;
