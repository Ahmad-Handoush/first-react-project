import { useState } from "react";
import Title from "./Title";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [find, setFind] = useState("");
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="contact">
      <div className="container">
        <Title>we are happy to hear from you </Title>
        <div className="contact-us" data-aos="zoom-in">
          <form action="" name="contact">
            <div className="form-group">
              <label htmlFor="#name">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="#email">Email</label>
              <input
                type="text"
                placeholder="Your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="#select">How did you find us?</label>
              <select
                name="find"
                className="select"
                id="select"
                value={find}
                onChange={(e) => setFind(e.target.value)}
              >
                <option value="friend">Friends</option>
                <option value="media">Media</option>
                <option value="client">Client</option>
              </select>
            </div>
            <div className="form-check">
              <label htmlFor="#check">Newsletter?</label>
              <div className="check">
                <input
                  type="checkbox"
                  placeholder="Your name"
                  value={checked}
                  id="check"
                  onChange={(e) => setChecked(e.target.value)}
                />
                <label htmlFor="">yes,please</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="#text">Drop us a line</label>
              <textarea
                name=""
                id="text"
                cols="40"
                rows="5"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <div className="send">
              <button className="save">Send it!</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
