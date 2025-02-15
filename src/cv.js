import React from "react";

function CV() {
  return (
    <div>
      <header className="bg-dark text-white text-center p-4">
        <h1>DELOS REYES, EMMANUEL</h1>
        <h5>BSIT-32A2</h5>
        <p>College | Academic Interests</p>
      </header>

      <section id="home" className="container py-5 text-center">
        <h2>Welcome to My CV!</h2>
        <p>
          I am currently studying at LYCEUM OF ALABANG. I am involved in School
          Activities and have developed skills in Web Designing.
        </p>
      </section>

      <section id="about" className="container py-5">
        <h2>About Me</h2>
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>Education</h3>
            <ul>
              <li>Elementary - SAN PEDRO CENTRAL SCHOOL</li>
              <li>High School - ADELINA 1 NATIONAL HIGH SCHOOL </li>
              <li>Senior High School - LYCEUM OF ALABANG</li>
              <li>College - LYCEUM OF ALABANG</li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <h3>School Activities</h3>
            <ul>
              <li>MOBILE LEGENDS CHAMPION</li>
              <li>IT OLYMPICS RUNNER UP IN E-SPORTS CATEGORY</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="container py-5 bg-light">
        <h2>Contact Me</h2>
        <form
          id="contact-form"
          action="submit_form.php"
          method="POST"
          onSubmit="return validateForm(event)"
        >
          <div className="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label for="subject">Subject:</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              required
            />
          </div>
          <div className="form-group">
            <label for="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>

      <footer className="bg-dark text-white text-center p-4"></footer>
    </div>
  );
}

export default CV;
