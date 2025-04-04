import React from "react";
import logo from "logo.jpg";
import shop1 from "shop1.webp";
import shop2 from "shop2.webp";


const About = () => {
  return (
    <div className="about-container">
      {/* Logo at the top */}
      <div className="logo-container">
        <img src={logo} alt="Prime Hairstyle Logo" className="about-logo" />
      </div>

      {/* Heading & Description */}
      <h2 className="about-title">Über Uns</h2>
      <p className="about-text">
        Willkommen bei <strong>Prime Hairstyle</strong> – Ihrem exklusiven Herrenfriseur für moderne und stilvolle Haarschnitte.  
        Unser erfahrenes Team kombiniert handwerkliche Präzision mit den neuesten Trends, um Ihnen den perfekten Look zu verleihen.  
        Wir legen Wert auf höchste Qualität, individuelle Beratung und ein luxuriöses Barber-Erlebnis.
      </p>

      <p className="about-text">
        Bei uns steht der Kunde im Mittelpunkt. Egal, ob Sie einen klassischen Haarschnitt, eine exklusive Bartpflege oder ein modernes Styling wünschen –  
        wir bieten Ihnen maßgeschneiderte Dienstleistungen, die Ihre Persönlichkeit unterstreichen.  
        Unsere hochwertigen Produkte und professionellen Techniken sorgen für ein unvergleichliches Ergebnis.
      </p>

      {/* Images Section */}
      <div className="about-images">
        <img src={shop1} alt="Barbershop Innenraum" className="about-image" />
        <img src={shop2} alt="Barbershop Stühle" className="about-image" />
      </div>
    </div>
  );
};

export default About;
