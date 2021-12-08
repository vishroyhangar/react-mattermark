import Banner from './Components/Banner';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SectionIntro from './Components/Section/SectionIntro';
import SectionLogo from './Components/Section/SectionLogo';
import SectionOutro from './Components/Section/SectionOutro';

function App() {
  return (
    <div className="App">
      <Banner />

      <Header />

      <SectionIntro />

      <SectionLogo />

      <SectionOutro />

      <Footer />
    </div>
  );
}

export default App;
