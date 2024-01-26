import Title from "./Title";
import { IoIosPerson } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Cities() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const cities = [
    {
      city: "lisbon",
      easters: "1600+ happy easters",
      chefs: "60+ top chefs ",
      twitter: "@omnifood_lx",
      image: "../../../public/pexels-max-avans-5069524.jpg",
    },
    {
      city: "san francisco",
      easters: "1600+ happy easters",
      chefs: "60+ top chefs ",
      twitter: "@omnifood_st",
      image: "../../../public/pexels-mohamed-almari-1485894.jpg",
    },
    {
      city: "Berlin",
      easters: "1600+ happy easters",
      chefs: "60+ top chefs ",
      twitter: "@omnifood_berlin",
      image: "../../../public/pexels-pixabay-417023.jpg",
    },
    {
      city: "London",
      easters: "1600+ happy easters",
      chefs: "60+ top chefs ",
      twitter: "@omnifood_london",
      image: "../../../public/pexels-dominika-gregušová-672532.jpg",
    },
  ];
  return (
    <section className="cities" id="cities">
      <div className="container">
        <Title> We are currently in these cities</Title>
        <ul className="show flex" data-aos="fade-down">
          {cities.map((city) => (
            <li key={city.city} className="imag">
              <div className="main-image">
                <img src={city.image} alt={city.city} />
              </div>
              <h2>{city.city}</h2>
              <ul>
                <li>
                  <span className="icon">
                    <IoIosPerson />
                  </span>{" "}
                  {city.easters}
                </li>
                <li>
                  <span className="icon">
                    <IoStarSharp />
                  </span>{" "}
                  {city.chefs}
                </li>
                <li>
                  <span className="icon">
                    <FaTwitter />
                  </span>{" "}
                  <Link>{city.twitter}</Link>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Cities;
