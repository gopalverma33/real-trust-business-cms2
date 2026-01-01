import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-top">

        {/* LEFT TEXT */}
        <div className="why-text">
          <h5>Not Your Average Realtor</h5>
          <h2>
            Real Estate Solutions <br />
            That Actually Work
          </h2>
          <p>
            We combine strategy, design, and marketing to deliver
            real results for our clients and help them maximize ROI.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="why-images">
          <div className="circle big">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" />
          </div>
          <div className="circle small top">
            <img src="https://randomuser.me/api/portraits/women/45.jpg" />
          </div>
          <div className="circle small bottom">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" />
          </div>
        </div>

      </div>

      {/* WHY CHOOSE US */}
      <div className="why-bottom">
        <h3>Why Choose Us?</h3>

        <div className="why-cards">
          <div className="why-card">
            <span className="icon">🏠</span>
            <h4>Potential ROI</h4>
            <p>
              Maximize your property value with data-driven real
              estate strategies.
            </p>
          </div>

          <div className="why-card">
            <span className="icon">🎨</span>
            <h4>Design</h4>
            <p>
              Eye-catching designs that attract buyers and elevate
              your brand presence.
            </p>
          </div>

          <div className="why-card">
            <span className="icon">📈</span>
            <h4>Marketing</h4>
            <p>
              Targeted marketing campaigns to ensure the right
              audience finds you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
