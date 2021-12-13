import Banner from './Components/Banner';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SectionIntro from './Components/Section/SectionIntro';
import SectionLogo from './Components/Section/SectionLogo';
import SectionOutro from './Components/Section/SectionOutro';
import SectionProfessional from './Components/Section/SectionProfessional';
import SectionData from './Components/Section/SectionData';

function App() {
  return (
    <div className="App">
      <Banner />

      <Header />

      <SectionIntro />

      <SectionLogo />

      <SectionData />

      <SectionProfessional />

      <SectionOutro />

      <Footer />
    </div>
  );
}

export default App;
