
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import MyStory from './components/MyStory';
import RequestProject from './components/RequestProject';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <MyStory />
        <RequestProject />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
