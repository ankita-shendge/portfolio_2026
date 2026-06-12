import { type PointerEvent } from "react";
import myPhoto from "../my_photo2.png";

export function Hero3D() {
  const updateTilt = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--hero-tilt-x", `${y * -8}deg`);
    event.currentTarget.style.setProperty("--hero-tilt-y", `${x * 10}deg`);
  };

  const resetTilt = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--hero-tilt-x", "0deg");
    event.currentTarget.style.setProperty("--hero-tilt-y", "0deg");
  };

  return (
    <section className="hero-3d" aria-labelledby="hero-title">
      <div className="hero-3d-copy">
        <p className="eyebrow">Frontend engineer • Sunnyvale, CA</p>
        <h1 id="hero-title">
          Building digital experiences with <span>depth.</span>
        </h1>
        <p className="hero-3d-intro">
          I turn complex product requirements into responsive, accessible, and
          high-performing interfaces with React, Vue.js, Angular, Next.js, and
          TypeScript.
        </p>

        <div className="hero-3d-actions">
          <a
            className="primary-button"
            href="https://www.linkedin.com/in/ankita-shendge/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
          </a>
          <a
            className="secondary-button"
            href="https://github.com/ankita-shendge"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="secondary-button"
            href="/Ankita_Shendge_Resume.pdf"
            download="Ankita_Shendge_Resume.pdf"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-3d-metrics">
          <div className="hero-experience-metric">
            <strong>4+</strong>
            <span>Years in software</span>
          </div>
          <div className="hero-education-card">
            <div className="hero-education-header">
              <span>Education</span>
              <strong>4.0 GPA</strong>
            </div>
            <div className="hero-degree">
              <span>MS, Information Technology</span>
              <small>University of Denver • 2024</small>
            </div>
            <div className="hero-degree">
              <span>BE, Computer Engineering</span>
              <small>Pune University • 2014</small>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-3d-scene"
        onPointerMove={updateTilt}
        onPointerLeave={resetTilt}
        aria-label="Interactive 3D developer profile"
      >
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-code-plane" aria-hidden="true">
          <span>const developer = &#123;</span>
          <strong>accessible: true,</strong>
          <strong>performance: &quot;fast&quot;,</strong>
          <strong>curious: always</strong>
          <span>&#125;;</span>
        </div>

        <div className="hero-profile-card">
          <div className="hero-profile-status">
            <span />
            Available for opportunities
          </div>
          <div className="hero-profile-image">
            <img src={myPhoto} alt="Ankita Shendge" />
          </div>
          <div className="hero-profile-copy">
            <p>ANKITA.SHENDGE</p>
            <strong>Frontend Engineer</strong>
            <span>Design • Build • Test • Ship</span>
          </div>
        </div>
{/*
        <div className="hero-tech-card hero-tech-react">
          <span>01</span>
          <strong>React + Angular + Vue</strong>
        </div>
        <div className="hero-tech-card hero-tech-vue">
          <span>02</span>
          <strong>Javascript + Typescript</strong>
        </div>
        <div className="hero-tech-card hero-tech-api">
          <span>03</span>
          <strong>REST APIs + Testing</strong>
        </div> */}
      </div>
    </section>
  );
}
