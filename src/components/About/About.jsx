import './About.css'
import dannoAbout from '../../assets/images/danno-about.jpg'

function About() {
  return (
    <section
      className="about"
      id="sobre-mi"
    >
      <div className="about__background-word">
        DANNO
      </div>

      <div className="about__container">
        {/* =========================
            SECTION BRAND
        ========================= */}

        <div className="about__top">
          <div className="about__section-brand">
            <div className="about__brand-mark">
              <span className="about__brand-corner about__brand-corner--top-left" />
              <span className="about__brand-corner about__brand-corner--bottom-right" />

              <span className="about__brand-name">
                DANNO
              </span>
            </div>

            <span className="about__brand-section">
              SOBRE MÍ
            </span>
          </div>

          <span className="about__type">
            FOTOGRAFÍA · VIDEO · EXTERIORES
          </span>
        </div>

        <div className="about__layout">
          {/* =========================
              IMAGE
          ========================= */}

          <div className="about__visual">
            <div className="about__image-frame">
              <img
                className="about__image"
                src={dannoAbout}
                alt="Danno fotógrafo"
              />

              <div className="about__image-overlay" />

              <span className="about__frame-label">
                FRAME 01
              </span>

              <span className="about__vertical-location">
                SAN FELIPE / GUANAJUATO
              </span>

              <div className="about__focus">
                <span />
                <span />
                <span />
                <span />

                <div className="about__focus-cross">
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              CONTENT
          ========================= */}

          <div className="about__content">
            <div className="about__heading">
              <p className="about__eyebrow">
                <span />
                DETRÁS DE LA CÁMARA
                <span />
              </p>

              <h2 className="about__title">
                <span>
                  Luz real.
                </span>

                <span>
                  Momentos reales.
                </span>

                <span className="about__title-accent">
                  Una mirada propia.
                </span>
              </h2>
            </div>

            {/* =========================
                STORY
            ========================= */}

            <div className="about__story">
              <p>
                Mi nombre es{' '}
                <strong>
                  Daniel Romero Patlán
                </strong>
                . Soy originario del estado de Hidalgo y
                actualmente radico en{' '}
                <strong>
                  San Felipe, Guanajuato
                </strong>
                , lugar donde mi gusto por la fotografía
                terminó convirtiéndose en una forma de vida.
              </p>

              <p>
                Comencé a los{' '}
                <strong>
                  17 años
                </strong>
                , haciendo fotografías con un teléfono.
                Con el tiempo pude adquirir mi primera
                cámara profesional y complementar mi
                aprendizaje con cursos básicos de
                fotografía y edición.
              </p>

              <p>
                Aunque gran parte de lo que sé lo he
                aprendido por mi propia cuenta,
                inspirándome en fotógrafos y creadores
                de contenido que han formado parte de
                mi proceso creativo.
              </p>

              <p>
                Mi estilo se define como{' '}
                <strong>
                  urbano, dark y cinematográfico
                </strong>
                . He tenido la oportunidad de participar
                en diferentes proyectos y eventos,
                entre ellos la cobertura fotográfica
                de{' '}
                <strong>
                  Under Side 821
                </strong>
                , experiencias que han fortalecido
                mi trabajo con el paso del tiempo.
              </p>
            </div>

            {/* =========================
                QUOTE
            ========================= */}

            <blockquote className="about__quote">
              <span className="about__quote-mark">
                “
              </span>

              <p>
                Lo hago por gusto,
                lo hago por pasión,
                lo hago por amor al arte.
              </p>

              <span className="about__quote-signature">
                DANNO / PHOTOGRAPHY
              </span>
            </blockquote>

            {/* =========================
                INFO
            ========================= */}

            <div className="about__info">
              <div className="about__info-item">
                <span className="about__info-value">
                  17
                </span>

                <div>
                  <strong>
                    Años
                  </strong>

                  <small>
                    Inicio en la fotografía
                  </small>
                </div>
              </div>

              <div className="about__info-item">
                <span className="about__info-value about__info-value--text">
                  San Felipe
                </span>

                <div>
                  <strong>
                    Guanajuato
                  </strong>

                  <small>
                    México
                  </small>
                </div>
              </div>

              <div className="about__info-item">
                <span className="about__info-value about__info-value--text">
                  Dark
                </span>

                <div>
                  <strong>
                    Urbano
                  </strong>

                  <small>
                    Cinematográfico
                  </small>
                </div>
              </div>
            </div>

            {/* =========================
                CTA
            ========================= */}

            <div className="about__cta-wrap">
              <a
                className="about__cta"
                href="#portafolio"
              >
                <span className="about__cta-top">
                  VER SELECCIÓN
                </span>

                <span className="about__cta-main">
                  PORTAFOLIO
                </span>

                <span className="about__cta-bottom">
                  DANNO
                </span>

                <span className="about__cta-icon">
                  <span />
                  <span />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About