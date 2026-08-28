import { useState } from 'react'
import './Contact.css'

const WHATSAPP_NUMBER = '524281249374'

const services = [
  {
    value: 'Sesión individual o pareja',
    label: 'Sesión individual o pareja — $1,300',
  },
  {
    value: 'Video',
    label: 'Video — $1,500',
  },
  {
    value: 'Eventos',
    label: 'Eventos — $1,500',
  },
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
    location: '',
    message: '',
  })

  const getToday = () => {
    const today = new Date()

    const year = today.getFullYear()

    const month = String(
      today.getMonth() + 1
    ).padStart(2, '0')

    const day = String(
      today.getDate()
    ).padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  const formatDate = (date) => {
    if (!date) return 'Por definir'

    const [year, month, day] =
      date.split('-')

    return `${day}/${month}/${year}`
  }

  const formatTime = (time) => {
    if (!time) return 'Por definir'

    const [hours, minutes] =
      time.split(':')

    const hour = Number(hours)

    const period =
      hour >= 12
        ? 'p. m.'
        : 'a. m.'

    const formattedHour =
      hour % 12 || 12

    return `${formattedHour}:${minutes} ${period}`
  }

  const handleChange = (event) => {
    const { name, value } =
      event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const buildMessage = () => {
    return `Hola Danno 👋

Vi tu trabajo y me gustaría solicitar información.

📸 *SOLICITUD DANNO*

*Nombre:* ${formData.name || 'Por definir'}
*Servicio:* ${formData.service || 'Por definir'}
*Fecha:* ${formatDate(formData.date)}
*Hora:* ${formatTime(formData.time)}
*Lugar:* ${formData.location || 'Por definir'}

*Mi idea:*
${formData.message || 'Quiero conocer más información sobre el servicio.'}

¿Tienes disponibilidad para esa fecha?`
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        buildMessage()
      )}`

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section
      className="contact"
      id="contacto"
    >
      <div className="contact__background-word">
        CONTACT
      </div>

      <div className="contact__container">
        {/* =========================
            SECTION BRAND
        ========================= */}

        <div className="contact__top">
          <div className="contact__section-brand">
            <div className="contact__brand-mark">
              <span className="contact__brand-corner contact__brand-corner--top-left" />

              <span className="contact__brand-corner contact__brand-corner--bottom-right" />

              <span className="contact__brand-name">
                DANNO
              </span>
            </div>

            <span className="contact__brand-section">
              CONTACTO
            </span>
          </div>

          <span className="contact__type">
            RESERVACIONES · WHATSAPP
          </span>
        </div>

        {/* =========================
            HEADING
        ========================= */}

        <div className="contact__heading">
          <p className="contact__eyebrow">
            <span />
            HABLEMOS DE TU IDEA
            <span />
          </p>

          <h2 className="contact__title">
            <span>
              Reserva tu
            </span>

            <span className="contact__title-accent">
              próxima historia.
            </span>
          </h2>

          <p className="contact__description">
            Fecha, lugar y una idea. Cuéntame
            lo que tienes en mente y envía tu
            solicitud directamente por WhatsApp.
          </p>
        </div>

        {/* =========================
            RESERVATION
        ========================= */}

        <div
          className="contact__reservation"
          id="reservar"
        >
          <div className="contact__reservation-top">
            <div>
              <span className="contact__reservation-label">
                DATOS DE LA SOLICITUD
              </span>

              <small>
                Completa tu solicitud
              </small>
            </div>

            <span className="contact__reservation-code">
              REQUEST / DANNO
            </span>
          </div>

          {/* =========================
              FORM
          ========================= */}

          <form
            className="contact__form"
            onSubmit={handleSubmit}
          >
            {/* NOMBRE / SERVICIO */}

            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">
                  Nombre
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="¿Cómo te llamas?"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="service">
                  Tipo de servicio
                </label>

                <div className="contact__select-wrapper">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option
                      value=""
                      disabled
                    >
                      Selecciona un servicio
                    </option>

                    {services.map(
                      (service) => (
                        <option
                          key={service.value}
                          value={service.value}
                        >
                          {service.label}
                        </option>
                      )
                    )}
                  </select>

                  <span className="contact__select-arrow" />
                </div>
              </div>
            </div>

            {/* FECHA / HORA */}

            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="date">
                  Fecha
                </label>

                <input
                  id="date"
                  type="date"
                  name="date"
                  min={getToday()}
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="time">
                  Hora
                </label>

                <input
                  id="time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* LUGAR */}

            <div className="contact__field">
              <label htmlFor="location">
                Lugar
              </label>

              <input
                id="location"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="San Felipe, Gto. / Por definir"
              />
            </div>

            {/* IDEA */}

            <div className="contact__field contact__field--message">
              <label htmlFor="message">
                Cuéntame tu idea
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Platícame un poco sobre lo que tienes en mente..."
              />
            </div>

            {/* =========================
                SUBMIT
            ========================= */}

            <div className="contact__submit-area">
              <div className="contact__submit-info">
                <span>
                  LISTO PARA ENVIAR
                </span>

                <small>
                  Se abrirá una conversación
                  directamente con Danno.
                </small>
              </div>

              <button
                type="submit"
                className="contact__submit"
              >
                <span className="contact__submit-copy">
                  <strong>
                    SOLICITAR POR WHATSAPP
                  </strong>

                  <small>
                    Consultar disponibilidad
                  </small>
                </span>

                <span className="contact__submit-icon">
                  <span />
                  <span />
                </span>
              </button>
            </div>
          </form>

          {/* =========================
              RESERVATION BOTTOM
          ========================= */}

          <div className="contact__reservation-bottom">
            <span>
              WHATSAPP DIRECTO
            </span>

            <span>
              RESPUESTA PERSONAL
            </span>

            <span>
              SIN COMPROMISO
            </span>
          </div>

          {/* =========================
              CAMERA FOCUS
          ========================= */}

          <div className="contact__focus">
            <span />
            <span />
            <span />
            <span />

            <div className="contact__focus-cross">
              <span />
              <span />
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM
        ========================= */}

        <div className="contact__bottom">
          <span>
            SAN FELIPE / GUANAJUATO
          </span>

          <span>
            FOTOGRAFÍA + VIDEO
          </span>

          <span>
            DANNO © 2026
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact