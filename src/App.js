import logo from './logo.svg';
import './App.css';
import './css/style.css'
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  const galleryImages = [
    'https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg',
    'https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg',
    'https://upload.wikimedia.org/wikipedia/en/9/9a/LikeaBossPoster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/a/a1/Three_Christs_poster.jpg',
  ];

  return (
    <div className="App">
      <Header />
      <Banner
        title="Welcome to My Website"
        text="This is the banner text."
        primaryBtnText="Learn More"
        secondaryBtnText="Contact Us"
      />
      <Gallery images={galleryImages} />
      <Footer />
    </div>
  );
};

export default App;
