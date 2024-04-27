import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Links from './components/links/Links';
import Faq from './components/faq/Faq';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Links />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
