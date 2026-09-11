import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ClarityCards from './components/ClarityCards';
import BuyingPowerCalculator from './components/BuyingPowerCalculator';
import DepositPathways from './components/DepositPathways';
import MortgageReady from './components/MortgageReady';
import WhyFundmaster from './components/WhyFundmaster';
import Testimonials from './components/Testimonials';
import BorrowingPowerCalculator from './components/BorrowingPowerCalculator';
import FinalCTA from './components/FinalCTA';
import SiteFooter from './components/SiteFooter';
import MobileCTA from './components/MobileCTA';
import PageEffects from './components/PageEffects';

export default function LandingPage() {
  return (
    <>
      <PageEffects />
      <Header />
      <Hero />
      <TrustStrip />
      <ClarityCards />
      <BuyingPowerCalculator />
      <DepositPathways />
      <MortgageReady />
      <WhyFundmaster />
      <Testimonials />
      <BorrowingPowerCalculator />
      <FinalCTA />
      <SiteFooter />
      <MobileCTA />
    </>
  );
}
