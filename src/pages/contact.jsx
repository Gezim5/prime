import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Kontakt</h2>
      <p className="contact-intro">
        Wir freuen uns darauf, von Ihnen zu hören. Kontaktieren Sie uns für Termine oder weitere Informationen.
      </p>

      {/* Contact Details */}
      <div className="contact-details">
        <p><strong>Prime Hairstyle</strong></p>
        <p>S2 4, 68161 Mannheim</p>
        <p>Telefon: +49 621 128 7109</p>
        <p>E-Mail: info@primehairstyle.de</p>
      </div>

      {/* Opening Hours Section */}
      <div className="opening-hours">
        <p>Monday 9:00 - 19:00</p>
        <p>Tuesday 9:00 - 19:00</p>
        <p>Wednesday 9:00 - 19:00</p>
        <p>Thursday 9:00 - 19:00</p>
        <p>Friday 9:00 - 19:00</p>
        <p>Saturday 9:00 - 18:00</p>
        <p>Sunday - Geschlossen</p>
      </div>

      {/* Additional Info Section */}
      <div className="additional-info">
        <p>
          <strong>Anfahrt:</strong> Unser Salon befindet sich im Herzen Mannheims. Parkmöglichkeiten sind in der Umgebung vorhanden.
        </p>
        <p>
          Folgen Sie uns auf unseren sozialen Medien für aktuelle Angebote und Styling-Tipps!
        </p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Ihr Name" required />
          <input type="email" placeholder="Ihre E-Mail" required />
          <textarea placeholder="Ihre Nachricht" required></textarea>
          <button type="submit">Nachricht senden</button>
        </form>
      </div>

      {/* Map Location */}
      <div className="map-container">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.662755318873!2d8.466121476397642!3d49.48867827118021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c98f8c369e33%3A0x4212896e99f44d0!2sS2%204%2C%2068161%20Mannheim%2C%20Germany!5e0!3m2!1sen!2sde!4v1711812345678"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
