import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// import Card from "./Card";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const cards = [
  {
    id: 1,
    title: "First card",
    description: " this is the most amazing store i have ever seen in my life",
    image: "../../public/pexels-ella-olsson-1640774.jpg",
  },
  {
    id: 2,
    title: "Second card",
    description: " this is the most amazing store i have ever seen in my life",
    image: "../../public/pexels-foodie-factor-566566.jpg",
  },
  {
    id: 3,
    title: "Third card",
    description: " this is the most amazing store i have ever seen in my life",
    image: "../../public/pexels-dana-tentis-725991.jpg",
  },
  {
    id: 4,
    title: "Third card",
    description: " this is the most amazing store i have ever seen in my life",
    image: "../../public/pexels-timur-saglambilek-915058.jpg",
  },
  {
    id: 5,
    title: "Third card",
    description: " this is the most amazing store i have ever seen in my life",
    image: "../../public/pexels-polina-tankilevitch-3872406.jpg",
  },
  {
    id: 6,
    title: "Third card",
    description: " this is the most amazing store i have ever seen in my life",
    image: "../../public/pexels-foodie-factor-566566.jpg",
  },
  {
    id: 7,
    title: "Third card",
    description: " this is the most amazing store i have ever seen in my life",
    image: "../../public/dark-leafy-greens.jpg",
  },
  {
    id: 8,
    title: "Third card",
    description: " this is the most amazing store i have ever seen in my life",
    image: "../../public/pexels-polina-tankilevitch-3872406.jpg",
  },
];

function MainCards() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="cards" data-aos="fade-left">
      <div className="container">
        <div className="carousel">
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {cards.map((card) => (
              <div className="card" key={card.id}>
                <img src={card.image} alt="title" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default MainCards;
