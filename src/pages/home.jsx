import React from "react";

const MainPage = () => {
  return (
    <div className="home-container">
      {/* Video Background Section */}
      <section className="video-wrapper">
        <video src="/background2.mp4" autoPlay loop muted playsInline />
        {/* Text Overlay */}
        <div className="video-text">
          <h1>
            Willkommen bei <span className="gold-text">Prime Hairstyle</span>
          </h1>
          <p>
            Erleben Sie Perfektion in Herrenhaarschnitten, professionelle Pflege und moderne Styling-Techniken.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        {/* Why Choose Us */}
        <div className="why-choose-us">
          <h2>Warum uns wählen?</h2>
          <ul>
            <li>💈 <strong>Meisterhaftes Handwerk:</strong> Präzise Haarschnitte und perfekte Rasuren.</li>
            <li>🔥 <strong>Modernste Styling-Techniken:</strong> Immer am Puls der Trends.</li>
            <li>🌿 <strong>Hochwertige Produkte:</strong> Nur die besten Pflegeprodukte.</li>
            <li>🏆 <strong>Erfahrung & Expertise:</strong> Unsere Stylisten sind wahre Profis.</li>
            <li>🎩 <strong>Luxuriöses Ambiente:</strong> Entspannen Sie in einem stilvollen Salon.</li>
          </ul>
        </div>

        {/* Price List */}
        <div className="price-list">
          <h2>Preisliste</h2>
          <ul>
            <li>
              <span><strong>Men's haircut dry (30 min.):</strong> €28.00</span>
            </li>
            <li>
              <span><strong>Men - trimming beards (20 min.):</strong> €15.00</span>
            </li>
            <li>
              <span><strong>Men - Dyeing beards (15 min.):</strong> €10.00</span>
            </li>
            <li>
              <span><strong>Men - Perm (1 hour):</strong> €60.00</span>
            </li>
            <li>
              <span>
                <strong>Men's package - haircut, beard trimming, eyebrow plucking (45 min.):</strong> €45.00
              </span>
            </li>
            <li>
              <span>
                <strong>Men's package - haircut, beard trim, face waxing, face mask, head massage (1 hour):</strong> €75.00
              </span>
            </li>
            <li>
              <span><strong>Men's haircut, wash, blow-dry (30 min.):</strong> €33.00</span>
            </li>
            <li>
              <span><strong>Machine haircut dry (20 min.):</strong> €20.00</span>
            </li>
            <li>
              <span><strong>Machine haircut, washing, blow-drying (25 min.):</strong> €25.00</span>
            </li>
            <li>
              <span><strong>Children's haircut (3-5 years) (20 min.):</strong> €18.00</span>
            </li>
            <li>
              <span><strong>Children's haircut (6-12 years) (25 min.):</strong> €25.00</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
