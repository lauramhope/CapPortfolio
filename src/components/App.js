import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './Navbar';
import { Banner } from './Banner';
import { AboutMe } from './AboutMe';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
