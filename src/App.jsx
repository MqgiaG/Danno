import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </div>
  )
}

export default App