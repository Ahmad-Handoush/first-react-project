import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Information() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="information">
      <div className="container">
        <div className="some flex-items">
          <div className="left">
            <h1>
              Explore millions of offerings tailored to your business needs for
              all you want in order to build our one career.
            </h1>
          </div>
          <div className="right-info" data-aos="fade-left">
            <div className="items-1 flex">
              <div className="item one">
                <h1>200+</h1>
                <p>Fruits</p>
              </div>
              <div className="item">
                <h1>120+</h1>
                <p>Vegetables</p>
              </div>
            </div>
            <div className="items-2 flex">
              <div className="item one">
                <h1>300+</h1>
                <p>Meals</p>
              </div>
              <div className="item">
                <h1>100+</h1>
                <p>Sauce</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
