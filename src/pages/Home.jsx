import { HiOutlineSearch } from "react-icons/hi";
import MainCards from "../components/MainCards";
import Information from "../components/home/Information";
import Plan from "../components/home/Plan";
import Works from "../components/home/Works";
import Gallery from "../components/home/Gallery";
import Cities from "../components/home/Cities";
import Footer from "../components/home/Footer";
import Price from "../components/home/Price";
import Contact from "../components/home/Contact";
import MainFooter from "../components/home/MainFooter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="home" id="#home">
      <section className="home-1">
        <div className="container">
          <div className="overlay"></div>
          <div className="info">
            <div className="title" data-aos="fade-up">
              <h1>GoodBye junk food.</h1>
              <h1>Hello super healthy meals.</h1>
            </div>
            <div className="search">
              <form action="">
                <input type="text" name="s" id="s" placeholder="Search ....." />
                <button className="btn-primary search-btn">
                  <HiOutlineSearch />

                  <span>Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="home-11">
        <Plan />
      </section>
      <section className="home-2">
        <MainCards />
      </section>
      <section className="home-3">
        <Information />
      </section>
      <section className="home-4">
        <Works />
      </section>
      <section className="home-5">
        <Gallery />
      </section>
      <section className="home-6">
        <Cities />
      </section>
      <section className="home-7">
        <Footer />
      </section>
      <section className="home-8">
        <Price />
      </section>
      <section className="home-9">
        <Contact />
      </section>
      <section className="home-10">
        <MainFooter />
      </section>
    </section>
  );
}

export default Home;
