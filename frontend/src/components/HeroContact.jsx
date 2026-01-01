import "./HeroContact.css";
import axios from "axios";
import { useState } from "react";

export default function HeroContact() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/api/contacts", data);
    alert("Submitted Successfully");
    setData({ fullName: "", email: "", mobile: "", city: "" });
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">

          {/* LEFT */}
          <div className="hero-text">
            <h1>
              Consultation, <br />
              Design <br />& Marketing
            </h1>
          </div>

          {/* RIGHT */}
          <div className="hero-form">
            <h3>Get a Free<br />Consultation</h3>

            <form onSubmit={submitHandler}>
              <input
                placeholder="Full Name"
                value={data.fullName}
                onChange={(e) => setData({ ...data, fullName: e.target.value })}
              />
              <input
                placeholder="Enter Email Address"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <input
                placeholder="Mobile Number"
                value={data.mobile}
                onChange={(e) => setData({ ...data, mobile: e.target.value })}
              />
              <input
                placeholder="Area, City"
                value={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
              />

              <button type="submit">Get Quick Quote</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
