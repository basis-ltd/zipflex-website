import Button from '../components/inputs/Button';
import PublicLayout from '../containers/layout/PublicLayout';
import ServicesSection from '../containers/landing-page/ServicesSection';
import ProjectsSection from '../containers/landing-page/ProjectsSection';
import ContactSection from '../containers/landing-page/ContactSection';
import FooterSection from '../containers/landing-page/FooterSection';

const LandingPage = () => {
  // SCROLL TO ID
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PublicLayout>
      <main className="w-full h-full flex flex-col">
        <section className="hero-section bg-background bg-cover bg-center">
          <section className="w-[75%] mx-auto h-[88vh] flex flex-col items-start justify-between relative py-[8%]">
            <h1></h1>
            <h1 className="w-[50%] text-6xl text-white flex max-[950px]:w-[55%] max-[850px]:w-[65%] max-[750px]:w-[75%] max-[650px]:w-[100%] max-[650px]:text-center">
              Next gen IT software solutions
            </h1>
            <menu className="w-full flex items-center gap-6 justify-between text-3xl max-[650px]:flex-col">
              <h1 className="text-white">
                We deliver{' '}
                <span className="text-secondary text-3xl">value</span>
              </h1>
              <Button
                className="!text-2xl !px-12 !border-primary"
                primary
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId('contact');
                }}
              >
                Let's talk
              </Button>
            </menu>
          </section>
        </section>
        <ServicesSection
          onCallToAction={(e) => {
            e.preventDefault();
            scrollToId('contact');
          }}
        />
        <ProjectsSection
          onCallToAction={(e) => {
            e.preventDefault();
            scrollToId('contact');
          }}
        />
        <ContactSection id="contact" />
        <FooterSection />
      </main>
    </PublicLayout>
  );
};

export default LandingPage;
