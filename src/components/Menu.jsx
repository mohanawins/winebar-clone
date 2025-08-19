import React from "react";

import wine1 from "../assets/wine1.jpg";
import wine2 from "../assets/wine2.jpg";
import wine3 from "../assets/wine3.jpg";
import wine4 from "../assets/wine4.jpg";

export default function Menu() {
  const wines = [
    { id: 1, name: "Fortnum's South Island Sauvignon Blanc, James Thompson, 75CL", price: "$29", image: wine1 },
    { id: 2, name: "Chianti DOCG, Fortnum's South Island, 75CL", price: "$29", image: wine2 },
    { id: 3, name: "Cabernet Sauvignon, Fortnum's South Island, 75CL", price: "$29", image: wine3 },
    { id: 4, name: "Fortnum's South Island Sauvignon Blanc, James Thompson, 75CL", price: "$29", image: wine4 },
  ];

  return (
    <section className="menu-section">
      <h2 className="menu-heading">Discover Special Wines</h2>

      <div className="wine-grid">
        {wines.map((wine) => (
          <div key={wine.id} className="card">
            <div className="image-wrap">
              <img src={wine.image} alt={wine.name} className="img" loading="lazy" />
            </div>
            <p className="wine-name">{wine.name}</p>
            <p className="price">{wine.price}</p>
          </div>
        ))}
      </div>

      {/* Inline CSS for a self-contained component */}
      <style>{`
        .menu-section {
          text-align: center;
          padding: 4rem 1rem;
          background-color: #f9fafb;
        }
        .menu-heading {
          font-size: 2rem;
          font-family: serif;
          margin-bottom: 2rem;
        }

        /* === GRID: exactly 4 columns on desktop === */
        .wine-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* 4 fixed columns */
          gap: 1.25rem;
          align-items: start;
          justify-items: center; /* center cards in their cells */
        }

        /* Card */
        .card {
          background: #ffffff;
          padding: 1rem;
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.08);
          transition: transform 0.2s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;         /* let grid control width */
          max-width: 220px;    /* keeps each card narrow to fit 4 cols */
        }
        .card:hover { transform: translateY(-2px); }

        /* === IMAGE: smaller width & height ===
           image-wrap defines the visible box,
           .img is scaled down to fit (no cropping). */
        .image-wrap {
          width: 100%;
          height: 90px;             /* tweak: 80–110px as you like */
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.75rem;
          background-color: #f5f5f5;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        .img {
          max-width: 80%;           /* narrower image */
          max-height: 100%;         /* limited by 90px box height */
          object-fit: contain;      /* show full bottle (no crop) */
          display: block;
        }

        /* Text */
        .wine-name {
          font-size: 0.9rem;
          line-height: 1.35;
          text-align: center;
          margin-bottom: 0.4rem;
        }
        .price {
          font-weight: 700;
          text-align: center;
        }

        /* Responsive: fewer columns on smaller screens */
        @media (max-width: 1024px) {
          .wine-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .wine-grid { grid-template-columns: 1fr; }
          .image-wrap { height: 80px; }
          .img { max-width: 75%; }
        }

        /* Reduced motion respect */
        @media (prefers-reduced-motion: reduce) {
          .card { transition: none; }
          .card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
