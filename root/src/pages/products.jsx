import React from "react";

const products = [
  { name: "Hair Wax", image: "root/wax-p.jpg", description: "Hochwertiges Wachs für starken Halt und natürlichen Glanz." },
  { name: "Styling Spray", image: "root/hair-sprayy.jpg", description: "Langanhaltender Halt ohne Rückstände für perfektes Styling." },
  { name: "Head Alcohol", image: "root/amber-alcol.jpg", description: "Erfrischende Desinfektion für die Kopfhaut nach dem Haarschnitt." },
  { name: "Beard Serum", image: "root/beard-serum.jpg", description: "Pflegt und formt den Bart mit wertvollen natürlichen Ölen." },
  { name: "After-Shave Balsam", image: "root/shave-balsam.jpg", description: "Beruhigt die Haut und spendet Feuchtigkeit nach der Rasur." },
  { name: "Hair Protection", image: "root/coconut-milk.jpg", description: "Schützt das Haar vor Schäden und bewahrt seine natürliche Stärke." },
  { name: "Peel-off Mask", image: "root/peel-off-m.jpg", description: "Entfernt Unreinheiten und revitalisiert die Haut für einen frischen Teint." },
  { name: "After-Shave Cream", image: "root/as-pro.jpg", description: "Pflegt und beruhigt die Haut nach der Rasur, reduziert Irritationen." },
  { name: "Face Scrub", image: "root/facepeeling.jpg", description: "Sanftes Peeling zur Entfernung abgestorbener Hautzellen für ein strahlendes Hautbild." },
];

const Products = () => {
  return (
    <div className="products-container">
      <h1 className="text-5xl font-bold text-center glow-gold">Unsere Produkte</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;