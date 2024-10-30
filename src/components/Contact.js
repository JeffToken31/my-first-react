import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contactez-moi</h2>
      <form>
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
