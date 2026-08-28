import './Hero.css'
import heroImage from '../../assets/images/danno-hero.png'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__container">
        <img
          className="hero__image"
          src={heroImage}
          alt="Danno, fotógrafo y videógrafo"
        />

        <div className="hero__overlay" />

        <div className="hero__content">
          <p className="hero__eyebrow">
            Fotografía & Video
          </p>

          <h1 className="hero__title">
            DANNO
          </h1>

          <p className="hero__subtitle">
            Retratos, eventos y sesiones exteriores con una visión cinematográfica.
          </p>

          <p className="hero__location">
            San Felipe, Guanajuato · México
          </p>

          <div className="hero__buttons">
            <a
              href="#portafolio"
              className="hero__button hero__button--primary"
            >
              Ver portafolio
            </a>

            <a
              href="#reservar"
              className="hero__button hero__button--secondary"
            >
              Reservar sesión
            </a>
          </div>
        </div>

        <a
          href="#portafolio"
          className="hero__scroll"
          aria-label="Ir al portafolio"
        >
          <span className="hero__scroll-arrow" />
        </a>
      </div>
    </section>
  )
}

export default Hero