import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Links from './components/links/Links';
import Faq from './components/faq/Faq';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Links />
      <Faq />
    </div>
  );
}

export default App;
