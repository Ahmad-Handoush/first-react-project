import Title from "./Title";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Price() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  const cards = [
    {
      id: 1,
      title: "premium",
      price: "$399",
      description: "that is only 13.30$ per meal",
      meal: "1 meal every day",
      order: "24/7",
      access: "Access to newest creations",
      delivery: "Free delivery",
      per: "month",
    },
    {
      id: 2,
      title: "pro",
      price: "$149",
      description: "that is only 14.90$ per meal",
      meal: "1 meal 10days/month",
      order: "24/7",
      access: "Access to newest creations",
      delivery: "Free delivery",
      per: "month",
    },
    {
      id: 3,
      title: "pro",
      price: "$149",
      description: "that is only 14.90$ per meal",
      meal: "1 meal 10days/month",
      order: "24/7",
      access: "Access to newest creations",
      delivery: "Free delivery",
      per: "month",
    },
    {
      id: 4,
      title: "starter",
      price: "$19",
      description: "",
      meal: "1 meal",
      order: "Order from 8 am to 12 pm",
      access: "",
      delivery: "Free delivery",
      per: "meal",
    },
  ];

  return (
    <section className="price">
      <div className="container">
        <Title>Start Eating Healthy today</Title>
        <div className="cards flex">
          {cards.map((card) => (
            <div className="card" key={card.id} data-aos="flip-right">
              <div className="tope">
                <h1 className="title">{card.title}</h1>
                <div className="pricee flex">
                  <h1>{card.price}</h1>
                  <span>/{card.per}</span>
                </div>
                <p>{card.description}</p>
              </div>
              <ul className="bottom">
                <li>{card.meal}</li>
                <li>{card.order}</li>
                <li>{card.access}</li>
                <li>{card.delivery}</li>
              </ul>
              <hr />
              <div className="sign-up">
                <button className="button">Sign-up now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Price;
