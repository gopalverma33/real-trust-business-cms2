import "./LearnMore.css";

export default function LearnMore() {
  return (
    <section className="learn-section">
      <div className="learn-container">

        {/* LEFT CONTENT */}
        <div className="learn-text">
          <h3>Discover How We Help You Sell Smarter</h3>
          <p>
            From professional staging to data-driven pricing and
            marketing, we guide you through every step of the
            listing process to maximize value.
          </p>
          <button>Learn More</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="learn-image">
          <img
            src="https://images.unsplash.com/photo-1560185127-6a8c5f1f9c4f"
            alt="Interior"
          />
        </div>

      </div>
    </section>
  );
}
