
import React from "react";

const reviews = [
  {
    name: "Amit Kumar",
    rating: 5,
    comment: "Amazing collection and super friendly staff. Highly recommended for Diwali shopping!",
  },
  {
    name: "Riya Sharma",
    rating: 4,
    comment: "Good variety of fireworks and best part is they are available 24 hours!",
  },
  {
    name: "Vikash Singh",
    rating: 5,
    comment: "Great prices and excellent service. They even helped me with bulk order on WhatsApp.",
  },
];

function App() {
  return (
    <div style={{ padding: 20 }}>
      <img src="/shop.jpg" alt="Shop" style={{ width: "100%", maxHeight: 500, objectFit: "cover", borderRadius: 20 }} />
      <h1>Sky Fireworks Patna</h1>
      <p>Shop No. 3, Mister Market, Khajekalan, near Police Station, Ashok Rajpath, Patna City</p>
      <p><strong>Phone/WhatsApp:</strong> 7903313820</p>
      <p><strong>Email:</strong> skyfireworkspatna@gmail.com</p>
      <p><strong>Open:</strong> 24 Hours</p>
      <p><strong>Special Offers:</strong> Wedding & Diwali Season</p>

      <h2 style={{ marginTop: 40 }}>Customer Reviews</h2>
      {reviews.map((r, i) => (
        <div key={i} style={{ marginBottom: 20, padding: 10, border: "1px solid #ddd", borderRadius: 10 }}>
          <p><strong>{r.name}</strong> {"★".repeat(r.rating)}</p>
          <p>"{r.comment}"</p>
        </div>
      ))}
    </div>
  );
}

export default App;
