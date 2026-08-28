import './Header.css'

function Header() {
  return (
    <header className="header">
      <a
        className="header__logo"
        href="#inicio"
        aria-label="Ir al inicio"
      >
        DANNO
      </a>

      <nav className="header__nav">
        <a href="#inicio">
          Inicio
        </a>

        <a href="#sobre-mi">
          Sobre mí
        </a>

        <a href="#portafolio">
          Portafolio
        </a>

        <a href="#servicios">
          Servicios
        </a>

        <a href="#contacto">
          Contacto
        </a>
      </nav>

      <a
        className="header__cta"
        href="#reservar"
      >
        Reservar
      </a>
    </header>
  )
}

export default Header