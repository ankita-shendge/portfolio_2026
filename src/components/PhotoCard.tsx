import { useEffect, useState } from "react";
import myPhoto from "../my_photo2.png";

const spreads = ["Photo and about", "Highlights and contact"];
const mobilePages = ["Photo", "About", "Highlights", "Contact"];

export function PhotoCard() {
  const [spread, setSpread] = useState(0);
  const [mobilePage, setMobilePage] = useState(0);
  const [isSmallWindow, setIsSmallWindow] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 920px)");
    const updateLayout = () => {
      setIsSmallWindow(mediaQuery.matches);
    };

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);

    return () => {
      mediaQuery.removeEventListener("change", updateLayout);
    };
  }, []);

  const goToPreviousPage = () => {
    if (isSmallWindow) {
      setMobilePage((currentPage) => Math.max(currentPage - 1, 0));
      return;
    }

    setSpread((currentSpread) => Math.max(currentSpread - 1, 0));
  };

  const goToNextPage = () => {
    if (isSmallWindow) {
      setMobilePage((currentPage) =>
        Math.min(currentPage + 1, mobilePages.length - 1),
      );
      return;
    }

    setSpread((currentSpread) =>
      Math.min(currentSpread + 1, spreads.length - 1),
    );
  };

  const currentItems = isSmallWindow ? mobilePages : spreads;
  const currentIndex = isSmallWindow ? mobilePage : spread;
  const goToItem = (index: number) => {
    if (isSmallWindow) {
      setMobilePage(index);
      return;
    }

    setSpread(index);
  };

  return (
    <article className="photo-card" aria-label="Ankita Shendge photobook">
      <div
        className="photo-book"
        data-spread={spread}
        data-mobile-page={mobilePage}
      >
        <div
          className={`book-spread book-spread-primary ${
            spread === 0 ? "is-active" : "is-turned"
          }`}
          aria-hidden={isSmallWindow ? mobilePage > 1 : spread !== 0}
        >
          <section
            className={`book-page book-left book-cover ${
              mobilePage === 0 ? "is-mobile-active" : ""
            }`}
          >
            <div className="book-photo">
              <img src={myPhoto} alt="Ankita Shendge" />
            </div>
            <div className="book-cover-copy">
              <p className="photo-label">Portfolio</p>
              <h3>Ankita Shendge</h3>
              <span>Frontend Engineer</span>
            </div>
          </section>

          <section
            className={`book-page book-right book-about ${
              mobilePage === 1 ? "is-mobile-active" : ""
            }`}
          >
            <p className="photo-label">About me</p>
            <h2>Creating frontend experiences that work for everyone.</h2>
            <p>
              I am a frontend engineer who turns complex product requirements
              into responsive, accessible interfaces. I build with React,
              Vue.js, Angular, Next.js, and TypeScript, with a focus on
              reusable components, WCAG accessibility, performance, and
              reliable API integrations.
            </p>
            <button
              className="page-corner"
              type="button"
              onClick={goToNextPage}
              disabled={isSmallWindow ? mobilePage !== 1 : spread !== 0}
              aria-label="Turn to highlights and contact"
            >
              Next
            </button>
          </section>
        </div>

        <div
          className={`book-spread book-spread-secondary ${
            spread === 1 ? "is-active" : ""
          }`}
          aria-hidden={isSmallWindow ? mobilePage < 2 : spread !== 1}
        >
          <section
            className={`book-page book-left book-work ${
              mobilePage === 2 ? "is-mobile-active" : ""
            }`}
          >
            <p className="photo-label">Highlights</p>
            <div className="hero-metrics">
              <div>
                <strong>4+</strong>
                <span>Years in software</span>
              </div>
              <div>
                <strong>50+</strong>
                <span>API test cases</span>
              </div>
              <div>
                <strong>20</strong>
                <span>Students supported</span>
              </div>
            </div>
            <div className="hero-highlights">
              <h2>What I do</h2>
              <ul>
                <li>Build scalable, reusable frontend systems</li>
                <li>Improve WCAG accessibility and web performance</li>
                <li>Integrate APIs, authentication, and automated tests</li>
              </ul>
            </div>
          </section>

          <section
            className={`book-page book-right book-contact ${
              mobilePage === 3 ? "is-mobile-active" : ""
            }`}
          >
            <p className="photo-label">Contact</p>
            <h2>Let&apos;s build something useful.</h2>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Location:</span>
                <span>Sunnyvale, CA</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span>ankitashendge15@gmail.com</span>
              </div>
              <div className="contact-links">
                <a
                  href="https://www.linkedin.com/in/ankita-shendge/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                  tabIndex={
                    (isSmallWindow && mobilePage === 3) ||
                    (!isSmallWindow && spread === 1)
                      ? 0
                      : -1
                  }
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ankita-shendge"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                  tabIndex={
                    (isSmallWindow && mobilePage === 3) ||
                    (!isSmallWindow && spread === 1)
                      ? 0
                      : -1
                  }
                >
                  GitHub
                </a>
                <a
                  href="/Ankita_Shendge_Resume.pdf"
                  download="Ankita_Shendge_Resume.pdf"
                  className="contact-link"
                  tabIndex={
                    (isSmallWindow && mobilePage === 3) ||
                    (!isSmallWindow && spread === 1)
                      ? 0
                      : -1
                  }
                >
                  Download Resume
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="book-controls" aria-label="Photobook controls">
        <button
          type="button"
          onClick={goToPreviousPage}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <div
          className="book-dots"
          aria-label={`${isSmallWindow ? "Page" : "Spread"} ${
            currentIndex + 1
          } of ${currentItems.length}`}
        >
          {currentItems.map((itemName, index) => (
            <button
              key={itemName}
              type="button"
              className={currentIndex === index ? "is-active" : ""}
              onClick={() => goToItem(index)}
              aria-label={`Go to ${itemName} ${
                isSmallWindow ? "page" : "spread"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={goToNextPage}
          disabled={currentIndex === currentItems.length - 1}
        >
          Next
        </button>
      </div>
    </article>
  );
}
