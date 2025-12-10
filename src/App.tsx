import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Transactions } from './components/Transactions';
import { Trust } from './components/Trust';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { MarketInsights } from './components/MarketInsights';
import { GlobalPresence } from './components/GlobalPresence';
import { AssetClasses } from './components/AssetClasses';
import { CapitalSources } from './components/CapitalSources';
import { Accreditations } from './components/Accreditations';
import { DataVisualization } from './components/DataVisualization';
import { ParallaxSection } from './components/ParallaxSection';

export default function App() {
  return (
    <div className="min-h-screen" style={{ scrollBehavior: 'smooth' }}>
      <Hero />
      <MarketInsights />
      <DataVisualization />
      <About />
      <Services />
      <CapitalSources />
      <Process />
      <AssetClasses />
      <Transactions />
      <ParallaxSection />
      <GlobalPresence />
      <Trust />
      <Accreditations />
      <CTABanner />
      <Footer />
    </div>
  );
}