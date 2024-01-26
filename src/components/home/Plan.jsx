import Title from "./Title";
import { FaInfinity } from "react-icons/fa6";
import { LuClock6 } from "react-icons/lu";
import { GiFruitTree } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Plan() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const infos = [
    {
      id: 1,
      icon: <FaInfinity />,
      title: "up to 365 days/year",
      description:
        "Never cook again! We really mean that. Our subscription palns include up to 365 days/year coverage. You can choose to order more flexibility if that is your style.Be more confident!",
    },
    {
      id: 2,
      icon: <LuClock6 />,
      title: "reday in 20 minutes",
      description:
        "You are only 20 minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs i each town to ensure that you are 100% happy.",
    },
    {
      id: 3,
      icon: <GiFruitTree />,
      title: "100% organic",
      description:
        "All our vegetables are ,organic and local. Animals are raised without added hormones or antibiotics. God for your health ,the environment,and it also tastes better!",
    },
    {
      id: 4,
      icon: <FaShoppingCart />,
      title: "order anything",
      description:
        "We do not limit your creativity ,wich means you can order whatever you fell like. You can also choose from our menu containing over 100 delicious meals. It is up to you!",
    },
  ];
  return (
    <section className="plan">
      <div className="container">
        <Title>
          get food fast <span>-</span> not fast food
        </Title>
        <div className="description">
          Hello we are Omnifood ,your new premium food delivery service .We know
          you are always busy.No time for cooking.So let us take care of that,we
          are really good at it ,we promise! you will be excellent.
        </div>
        <div className="advices flex " data-aos="fade-up">
          {infos.map((item) => (
            <div className="advice" key={item.id}>
              <div className="icon">{item.icon}</div>
              <h2 className="title">{item.title}</h2>
              <p className="desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plan;
