import { useState } from 'react'
import './Services.css'

const services = [
  {
    id: '01',
    title: 'Individual o pareja',
    category: 'Fotografía',
    tag: 'Sesión',
    price: '$1,300',
    description:
      'Una sesión pensada para retratarte de forma natural, ya sea individualmente o en pareja, cuidando cada detalle, locación y momento.',
    details: [
      '2 vestuarios',
      '1 h 30 min de sesión',
      '20 fotografías',
    ],
  },
  {
    id: '02',
    title: 'Video',
    category: 'Audiovisual',
    tag: 'Producción',
    price: '$1,500',
    description:
      'Producción audiovisual en diferentes spots para transformar una idea, persona o momento en una pieza con movimiento.',
    details: [
      '3 spots',
      'Video final',
      'Duración máxima de 5 minutos',
    ],
  },
  {
    id: '03',
    title: 'Eventos',
    category: 'Cobertura',
    tag: 'Eventos',
    price: '$1,500',
    description:
      'Cobertura fotográfica para capturar los momentos, detalles y personas que forman parte de tu evento.',
    details: [
      'Fiestas de cumpleaños',
      'Reuniones',
      'Eventos promocionales',
    ],
  },
]

function Services() {
  const [activeService, setActiveService] = useState(0)

  const handleServiceChange = (index) => {
    setActiveService(index)
  }

  return (
    <section
      className="services"
      id="servicios"
    >
      <div className="services__background-word">
        SERVICES
      </div>

      <div className="services__container">
        {/* =========================
            SECTION BRAND
        ========================= */}

        <div className="services__top">
          <div className="services__section-brand">
            <div className="services__brand-mark">
              <span className="services__brand-corner services__brand-corner--top-left" />

              <span className="services__brand-corner services__brand-corner--bottom-right" />

              <span className="services__brand-name">
                DANNO
              </span>
            </div>

            <span className="services__brand-section">
              SERVICIOS
            </span>
          </div>

          <span className="services__type">
            FOTOGRAFÍA · VIDEO · EVENTOS
          </span>
        </div>

        {/* =========================
            HEADING
        ========================= */}

        <div className="services__heading">
          <p className="services__eyebrow">
            <span />
            SERVICIOS
            <span />
          </p>

          <h2 className="services__title">
            <span>
              Una idea.
            </span>

            <span className="services__title-accent">
              Diferentes formas de contarla.
            </span>
          </h2>

          <p className="services__description">
            Elige el tipo de sesión o cobertura que mejor
            se adapte a lo que tienes en mente.
          </p>
        </div>

        {/* =========================
            SERVICES
        ========================= */}

        <div className="services__list">
          {services.map((service, index) => {
            const isActive =
              activeService === index

            return (
              <article
                key={service.id}
                className={`services__item ${
                  isActive
                    ? 'services__item--active'
                    : ''
                }`}
                onMouseEnter={() =>
                  handleServiceChange(index)
                }
              >
                {/* =========================
                    TRIGGER
                ========================= */}

                <button
                  type="button"
                  className="services__trigger"
                  onClick={() =>
                    handleServiceChange(index)
                  }
                  onFocus={() =>
                    handleServiceChange(index)
                  }
                  aria-expanded={isActive}
                >
                  <div className="services__number">
                    {service.id}
                  </div>

                  <div className="services__main">
                    <div className="services__name">
                      <span className="services__category">
                        {service.category}
                      </span>

                      <h3>
                        {service.title}
                      </h3>
                    </div>

                    <span className="services__tag">
                      {service.tag}
                    </span>
                  </div>

                  <div className="services__price">
                    <small>
                      DESDE
                    </small>

                    <strong>
                      {service.price}
                    </strong>
                  </div>

                  <span className="services__plus">
                    <span />
                    <span />
                  </span>
                </button>

                {/* =========================
                    CONTENT
                ========================= */}

                <div className="services__content">
                  <div className="services__content-inner">
                    <div className="services__content-space" />

                    <div className="services__content-main">
                      <p className="services__item-description">
                        {service.description}
                      </p>

                      <div className="services__details">
                        {service.details.map(
                          (detail) => (
                            <span key={detail}>
                              {detail}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div className="services__content-side">
                      <span>
                        {service.price}
                      </span>

                      <small>
                        MXN
                      </small>
                    </div>
                  </div>
                </div>

                {/* =========================
                    DECORATION
                ========================= */}

                <span className="services__giant-number">
                  {service.id}
                </span>

                <div className="services__focus">
                  <span />
                  <span />
                  <span />
                  <span />

                  <div className="services__focus-cross">
                    <span />
                    <span />
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* =========================
            FOOTER
        ========================= */}

        <div className="services__footer">
          <div className="services__footer-copy">
            <span>
              ¿TIENES OTRA IDEA EN MENTE?
            </span>

            <small>
              Cuéntame qué quieres crear y revisamos las opciones.
            </small>
          </div>

          <a
            className="services__cta"
            href="#reservar"
          >
            <span>
              CUÉNTAME TU PROYECTO
            </span>

            <span className="services__cta-icon">
              <span />
              <span />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services