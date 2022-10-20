import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, Col } from "react-bootstrap";

function ContactForm() {
  const form = document.getElementById('my_form');
  const [state, handleSubmit] = useForm("xvoyqnnl");
  if (state.succeeded) {
      form.reset();
  }
  return (
    <section>
      <Container className="contact-form">
          <form onSubmit={handleSubmit} className="row" id='my_form'>
            <Col md={5} className="contact-form-label">
              <label htmlFor="email" className='contact-label'>
                Email Address
              </label>
            </Col>
            <Col md={7} className="contact-form-info">
              <input
                id="email"
                type="email" 
                name="email"
                placeholder="Your Email"
                className='contact-input'
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <br/>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className='contact-message'
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              <br/>
              <button type="submit" className='contact-submit' disabled={state.submitting}>
                Submit
              </button>
            </Col>
          </form>
      </Container>
    </section>
  );
}
function Contact() {
  return (
    <ContactForm />
  );
}
export default Contact;