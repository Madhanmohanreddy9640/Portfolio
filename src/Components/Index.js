import React from "react";
import '../CSS/Style.css';
import '../JS/Script.js';
import madhu from '../IMAGES/madhu.jpg'
import folio4 from '../IMAGES/folio4.jpg'
import portfolio from '../IMAGES/portfolio.png'
import project_frentpage from '../IMAGES/project_frentpage.png'
import thopstech from '../IMAGES/thopstech.png'
import food_store from '../IMAGES/food_store.png'
import Madhan42002 from '../PDF/Madhan42002.pdf'
function Portfolio() {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Portfolio
        </a>
        <i className="bx bx-menu" id="menu-icon"></i>
        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Madhanmohan Reddy</h1>
          <h3>
            And I'm a <p>
            
              <span className="multiple-text"></span>
            </p>
          </h3>

          <div className="social-media">
            <a href="https://github.com/Madhanmohanreddy9640/" target="blank">
              <i className="bx bxl-github"></i>
            </a>
            <a href="mailto:madhan964039@gmail.com" target="blank">
              <i className="bx bxs-envelope"></i>
            </a>
            <a href="https://www.instagram.com/madhan__reddy4_19189/" target="blank">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="http://www.linkedin.com/in/%20madhan-mohan-reddy-573b6b341" target="blank">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
          <a
            href={Madhan42002}
            className="btn" target="blank"
          >
            Download CV
          </a>
        </div>
        <div className="img-folio">
        <img src={madhu} alt="Actionable Training" className="madhu-img"  width="400px" height="450px" redious="100%"/>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-img">
        <img src={folio4} alt="Actionable Training" className="madhu-img"  width="400px" height="450px" redious="100%"/>
        </div>
        <div className="about-content">
          <h2 className="heading">
            About<span>Me</span>
          </h2>
          <h3>Frontend Developer</h3>
          <p>
            Hello, I'm Madhanmohan Reddy from Andhra Pradesh.I was born on 4th
            May,2002. I have done my graduation in 2023 at YVU university
            Institute of Technology & Sciences. I am looking for a job where I
            can use full of my skills to reach organizational goals. I have a
            good Technical knowledge.
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </section>
      <section className="services" id="services">
        <h2 className="heading">
          Our<span>Services</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Web Development</h3>
            <p>
              Motivated designer and developer with experience creating custom
              websites through PHP and CSS. Strong collaboration skills and
              proven history of application development. DHTML and JavaScript.
              MS Access and MySQL.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="bx bx-crop"></i>
            <h3>Developer</h3>
            <p>
              You cannot make a good design if you do not understand people;
              design is made for people.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="bx bxl-instagram-alt"></i>
            <h3>App Design</h3>
            <p>
              I'm Designer with a great passion to my work. The main goal is to
              create modern, attractive and user-friendly interfaces and find
              creative and simple solutions for your business.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest<span>Project</span>
        </h2>
        <div className="portfolio-container">
          <div className="portfolio-box">
          <img src={portfolio} alt="Actionable Training" className="madhu-img"  width="400px" height="350px" redious="100%"/>
            <div className="portfolio-layer">
              <h4>Personal Portfolio</h4>
              <p>
                In this project I try making my own portfolio website for
                myself. Showcase my projects, my social media handles, my
                experience on the website.
              </p>
              <a href="https://madhanmohanreddy9640.github.io/Portfolio/" target="blank">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-box">
          <img src={thopstech} alt="Actionable Training" className="madhu-img"  width="400px" height="350px" redious="100%"/>
            <div className="portfolio-layer">
              <h4>Thops Tech Career Solutions</h4>
              <p>In this project I try making my own</p>
              <a
                href="https://madhanmohanreddy9640.github.io/netflix_sample/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-box">
          <img src={food_store} alt="Actionable Training" className="madhu-img"  width="400px" height="350px" redious="100%"/>
            <div className="portfolio-layer">
              <h4>Fresh fruits Booking</h4>
              <p>In this project we can book Fresh fruits by using python.</p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-box">
          <img src={project_frentpage} alt="Actionable Training" className="madhu-img"  width="400px" height="350px" redious="100%"/>
            <div className="portfolio-layer">
              <h4>Fresh meals Booking</h4>
              <p>In this project we can book a Fresh meal by using python.</p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          {/* <div className="portfolio-box">
          <img src={food_store} alt="Actionable Training" className="madhu-img"  width="400px" height="350px" redious="100%"/>
            <div className="portfolio-layer">
              <h4>Fresh fruits Booking</h4>
              <p>In this project we can book Fresh fruits by using python.</p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div> */}
        </div>
      </section>
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact<span>ME!</span>
          <div className="social-media">
            <a href="https://github.com/Madhanmohanreddy9640/" target="blank">
              <i className="bx bxl-github"></i>
            </a>
            <a href="mailto:madhan964039@gmail.com" target="blank">
              <i className="bx bxs-envelope"></i>
            </a>
            <a href="https://www.instagram.com/madhan__reddy4_19189/" target="blank">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="http://www.linkedin.com/in/%20madhan-mohan-reddy-573b6b341" target="blank">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </h2>
        <form
          action="#"
          name="submit-to-google-sheet"
          method="POST"
        >
          <div className="input-box">
            <input
              type="text"
              name="Name"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              name="Mobile"
              placeholder="Mobile Number"
              required
            />
            <input
              type="text"
              name="Emaile"
              placeholder="Email Subject"
              required
            />
          </div>
          <textarea
            name="Message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="btn"
            required
          />
        </form>
        <span id="msg"></span>
      </section>
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2025 by Madhanmohan Reddy | All Rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home">
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </footer>
      <script src="https://unpkg.com/scrollreveal"></script>
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    </>
    
  );
  
}

export default Portfolio;
