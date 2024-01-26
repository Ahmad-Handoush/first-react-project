import Title from "./Title";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <footer className="footer">
      <div className="overlay"></div>
      <div className="container">
        <Title>our custumers can not live without us</Title>
        <ul className="foot-content flex" data-aos="fade-up">
          <li>
            <h4>
              <span className="mark">“</span>
              Omnifood is just awesome!I just launched a startup which leaves me
              with no time for cooking.so Omnifood is a life-saver.Now that i
              got used to it. I could not live without my daily meals!
            </h4>
          </li>
          <li>
            <h4>
              <span className="mark">“</span>
              Inexpensive,healthy and great-tasting meals,delivered right to my
              home.We have lots of food delivery here in Lisbon ,but no one
              comes even close to Omnifood.
            </h4>
          </li>
          <li>
            <h4>
              <span className="mark">“</span>I was looking for a quick and easy
              food delivery service in San Francisco.I tried a lot of them and
              ended u with Omnifood.Best food delivery service in the BAy area.
            </h4>
          </li>
        </ul>
        <div className="last"></div>
      </div>
    </footer>
  );
}

export default Footer;
