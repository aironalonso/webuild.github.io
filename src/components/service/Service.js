import React from 'react';
import "./service.css";
import Pic1 from "../../img/pic1.jpg";
import Pic2 from "../../img/pic2.jpg";
import Pic3 from "../../img/pic3.jpg";
import Pic4 from "../../img/pic4.jpg";

const Service = () => {
  return (
    <div className='service'>
      {/* Service section */}
      <div class="wrapper">
        <h1>What We Offer</h1>

        <div class="content-box">
          <div class="card">
            <i class="bx bx-laptop bx-md"></i>
            <h2>Free Programming Courses</h2>
            <p> Learn from our Free Programming Courses.</p>
          </div>

          <div class="card">
            <i class="bx bxs-certification bx-md"></i>
            <h2>Global Certification</h2>
            <p>Globally Acknowledge Certifications will be given when you finish a module.</p>
          </div>

          <div class="card">
            <i class="bx bx-book-open bx-md"></i>
            <h2>Access to resources</h2>
            <p>Enjoy Free Access to our Modules, Files, Cheatsheets and more!</p>
          </div>

          <div class="card">
            <i class="bx bxs-layout bx-md"></i>
            <h2>Free website Layout</h2>
            <p>You can request for a free layout to test your skills.</p>
          </div>

          <div class="card">
            <i class="bx bx-group bx-md"></i>
            <h2>1v1 Tutorials</h2>
            <p>One on one coaching sessions with our tutors and developers.</p>
          </div>

          <div class="card">
            <i class="bx bxs-file-html bx-md"></i>
            <h2>Build you first website with us</h2>
            <p>Build your very first website.</p>

          </div>
        </div>
      </div>

      {/* Courses section */}
      <div className='course' id='course'>
        <h1 className='heading'>Our Popular Courses</h1>
        <div className='box-container'>

          <div class="box">
            <img src={Pic1} alt="photo" />
            <h3 class="price">$5</h3>
            <div class="content">
              <div class="stars">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <a href="#" class="title">Front-End Web Development</a>
              <p>
                Get started as a Front-End Web Developer using HTML,CSS,JAVASCRIPT,JQUERY and BOOTSTRAP. Lorem,
                ipsum dolor sit amet consectetur adipisicing eli
                t. Cumque possimus repudiandae placeat.
              </p>
              <div class="info">
                <h3><i class="fa fa-clock-o" aria-hidden="true"></i>3 Hours
                </h3>
                <h3><i class="fa fa-calendar" aria-hidden="true"></i> 5 Months
                </h3>
                <h3><i class="fa fa-book" aria-hidden="true"></i>10 Modules
                </h3>
              </div>
            </div>
          </div>

          <div class="box">
            <img src={Pic2} alt="photo" />
            <h3 class="price">$10</h3>
            <div class="content">
              <div class="stars">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>

              </div>
              <a href="#" class="title">Javascript Development</a>
              <p>
                JavaScript frameworks sit at the heart of any modern website.
                WeBuild JavaScript developers use their extensive experience with core JavaScript development
                and the newest frameworks and libraries to build dynamic and responsive websites
              </p>
              <div class="info">
                <h3><i class="fa fa-clock-o" aria-hidden="true"></i>6 Hours
                </h3>
                <h3><i class="fa fa-calendar" aria-hidden="true"></i> 10 Months
                </h3>
                <h3><i class="fa fa-book" aria-hidden="true"></i>15 Modules
                </h3>
              </div>
            </div>
          </div>

          <div class="box">
            <img src={Pic3} alt="photo" />
            <h3 class="price">$5</h3>
            <div class="content">
              <div class="stars">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <a href="#" class="title">HTML&CSS Responsive Web Design</a>
              <p>
                Enterprise-class websites need consistent colors, fonts, and design to match the organization's
                branding guidelines.
                WeBuild front-end developers are experts at designing responsive websites, with CSS at the core
                of front end development
                alongside JavaScript and HTML.
              </p>
              <div class="info">
                <h3><i class="fa fa-clock-o" aria-hidden="true"></i>2 Hours
                </h3>
                <h3><i class="fa fa-calendar" aria-hidden="true"></i> 6 Months
                </h3>
                <h3><i class="fa fa-book" aria-hidden="true"></i>12 Modules
                </h3>
              </div>
            </div>
          </div>

          <div class="box">
            <img src={Pic4} alt="" />
            <h3 class="price">$15</h3>
            <div class="content">
              <div class="stars">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <a href="#" class="title">ReactJs</a>
              <p>
                Learn how to use ReactJS and the Redux library to create next gen web applications. It covers
                all the practical aspects of
                developing with React, managing data and server communication with Redux. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit
                . Inventore vitae repellat rerum.
              </p>
              <div class="info">
                <h3><i class="fa fa-clock-o" aria-hidden="true"></i>4 Hours
                </h3>
                <h3><i class="fa fa-calendar" aria-hidden="true"></i> 8 Months
                </h3>
                <h3><i class="fa fa-book" aria-hidden="true"></i>13 Modules
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Service;