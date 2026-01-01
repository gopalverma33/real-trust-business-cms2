import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("https://real-trust-backend-s0qw.onrender.com/api/projects")
      .then(res => setProjects(res.data));
  }, []);

  return (
    <>
      <h2>Our Projects</h2>
      <div className="grid">
        {projects.map(p => (
          <div className="card" key={p._id}>
            <img src={p.image} alt="" />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </>
  );
}
