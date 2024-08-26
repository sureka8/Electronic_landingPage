
import './App.css';
import Banner from './components/Banner';
import Bestdeal from './components/Bestdeal';
import Bestdealers from './components/Bestdealers';
import Brabd from './components/Brabd';
import Deal from './components/Deal';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Menubar from './components/Menubar';
import Newsletter from './components/Newsletter';
import Recentlyview from './components/Recentlyview';
import Slider from './components/Slider';


function App() {
  return (
    <div className='' >
     <Menubar />
     <Menu />
     <Slider />
    <Deal />
    <Featured />
    <Bestdeal />
    <Bestdealers />
    <Banner />
    <Recentlyview />
    <Brabd />
    <Newsletter />
    <Footer />
    </div>
  );
}

export default App;
