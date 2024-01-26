import Title from "./Title";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Works() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <section className="works" id="works">
      <div className="container">
        <Title>How it Works - Simple as 1, 2, 3</Title>
        <div className="content flex-items ">
          <div className="image">
            <img
              src="../../../public/smartphone-isolated-white-background_60434-25.avif"
              alt="phone..."
            />
          </div>
          <div className="two">
            <div className="steps">
              <div className="step">
                <h3 data-aos="fade-left">
                  Choose the subscription plan that best fits your needs and
                  sign up today.{" "}
                </h3>
              </div>
              <div className="step">
                <h3 data-aos="fade-left">
                  {" "}
                  Order your delicious meals our mobile app or website.Or you
                  can even call us!{" "}
                </h3>
              </div>
              <div className="step">
                <h3 data-aos="fade-left">
                  {" "}
                  Enjoy your meal after less than 20 minutes. See you the next
                  time.{" "}
                </h3>
              </div>
            </div>
            <div className="images flex">
              <img
                src="../../../public/download-on-the-app-store-badge-svg-pdf-ai-eps (1).jpg"
                alt=""
              />
              <img
                src="../../../public/google-play-badge-english-get-it-on-google-play7825.logowik.com.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
