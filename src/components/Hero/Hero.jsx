import './Hero.css'
import heroImage from '../../assets/images/danno-hero.png'

const heroTitle = 'DANNO'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__container">
        {/* =========================
            BACKGROUND
        ========================= */}

        <div className="hero__media">
          <img
            className="hero__image"
            src={heroImage}
            alt="Danno, fotógrafo y videógrafo"
          />

          <div className="hero__image-glow" />
        </div>

        <div className="hero__overlay" />
        <div className="hero__vignette" />

        {/* =========================
            EXPOSURE
        ========================= */}

        <div className="hero__exposure">
          <span />
        </div>

        <div className="hero__grain" />

        {/* =========================
            CAMERA FRAME
        ========================= */}

        <div
          className="hero__viewfinder"
          aria-hidden="true"
        >
          <span className="hero__viewfinder-corner hero__viewfinder-corner--top-left" />
          <span className="hero__viewfinder-corner hero__viewfinder-corner--top-right" />
          <span className="hero__viewfinder-corner hero__viewfinder-corner--bottom-left" />
          <span className="hero__viewfinder-corner hero__viewfinder-corner--bottom-right" />
        </div>

        {/* =========================
            CONTENT
        ========================= */}

        <div className="hero__content">
          <div className="hero__eyebrow-wrap">
            <span className="hero__eyebrow-line" />

            <p className="hero__eyebrow">
              Fotografía & Video
            </p>
          </div>

          {/* =========================
              DANNO TITLE
          ========================= */}

          <h1
            className="hero__title"
            aria-label="DANNO"
          >
            <span
              className="hero__title-light"
              aria-hidden="true"
            />

            <span className="hero__title-letters">
              {heroTitle.split('').map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className="hero__title-letter"
                  data-letter={letter}
                  style={{
                    '--letter-index': index,
                  }}
                  aria-hidden="true"
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>

          <div className="hero__title-divider">
            <span />
          </div>

          <p className="hero__subtitle">
            Retratos, eventos y sesiones exteriores con
            una visión cinematográfica.
          </p>

          <div className="hero__location">
            <span className="hero__location-dot" />

            <span>
              San Felipe, Guanajuato · México
            </span>
          </div>

          {/* =========================
              BUTTONS
          ========================= */}

          <div className="hero__buttons">
            <a
              href="#portafolio"
              className="hero__button hero__button--primary"
            >
              <span className="hero__button-light" />

              <span className="hero__button-text">
                Ver portafolio
              </span>

              <span className="hero__button-arrow">
                <span />
              </span>
            </a>

            <a
              href="#reservar"
              className="hero__button hero__button--secondary"
            >
              <span className="hero__button-light" />

              <span className="hero__button-text">
                Reservar sesión
              </span>

              <span className="hero__button-arrow">
                <span />
              </span>
            </a>
          </div>
        </div>

        {/* =========================
            META
        ========================= */}

        <div
          className="hero__frame-meta hero__frame-meta--left"
          aria-hidden="true"
        >
          <span>
            DANNO / VISUAL STORIES
          </span>

          <small>
            FRAME 001
          </small>
        </div>

        <div
          className="hero__frame-meta hero__frame-meta--right"
          aria-hidden="true"
        >
          <span>
            SAN FELIPE · GTO
          </span>

          <small>
            MX / 2026
          </small>
        </div>

        {/* =========================
            FOCUS
        ========================= */}

        <div
          className="hero__focus"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />

          <div className="hero__focus-cross">
            <span />
            <span />
          </div>
        </div>

        {/* =========================
            SCROLL
        ========================= */}

        <a
          href="#portafolio"
          className="hero__scroll"
          aria-label="Ir al portafolio"
        >
          <span className="hero__scroll-ring" />
          <span className="hero__scroll-arrow" />
        </a>
      </div>
    </section>
  )
}

export default Hero