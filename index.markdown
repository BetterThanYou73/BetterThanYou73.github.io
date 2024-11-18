---
layout: splash
title: "Manas Joshi"
permalink: /
header:
  overlay_image: "assets/images/tech.jpg" # Replace with your actual hero image
  overlay_filter: 0.3
  actions:
    - label: "View Projects"
      url: "/projects/"
    - label: "Download Resume"
      url: "/assets/files/resume.pdf"
---


{% include author-profile.html %}



<div class="contact-form-container">
    <h2>Contact Me</h2>
    <p>Have questions or want to collaborate? Use the form below to send me a message.</p>
    
    <form 
      method="POST" 
      action="https://formspree.io/xbljklke" 
      id="contact-form"
    >
      <div class="form-group">
        <input type="text" id="name" name="name" required placeholder="Your Name">
      </div>
      <div class="form-group">
        <input type="email" id="email" name="_replyto" required placeholder="Your Email">
      </div>
      <div class="form-group" style="display:none;">
        <label for="honeypot">Leave this field empty</label>
        <input type="text" id="honeypot" name="honeypot">
      </div>
      <div class="form-group">
        <textarea id="message" name="message" rows="5" required placeholder="Your Message"></textarea>
      </div>
      <button type="submit" class="btn-submit">
        <span class="spinner hidden"></span>
        <span class="btn-text">Send Message</span>
      </button>
    </form>
  

    <div id="thank-you-message" class="hidden message-card">
      <h2>Thank You!</h2>
      <p>Your message has been sent successfully. I'll get back to you soon!</p>
      <button id="send-another" class="btn-submit">Send Another Message</button>
    </div>
  

    <div id="error-message" class="hidden message-card">
      <h2>Oops!</h2>
      <p>There was an issue submitting your form. Please try again later.</p>
      <button id="try-again" class="btn-submit">Try Again</button>
    </div>
  </div>

