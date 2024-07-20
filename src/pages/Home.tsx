import Button from '../components/Button';
import PublicLayout from '../containers/layout/PublicLayout';

const Home = () => {
  return (
    <PublicLayout>
      <main className="w-full flex flex-col bg-background gap-5 hero-section bg-cover bg-center">
        <section className="w-[85%] mx-auto h-[88vh] flex flex-col items-start justify-between relative py-[8%]">
          <h1></h1>
          <h1 className="w-[50%] text-6xl text-white flex">
            Next gen IT software solutions
          </h1>
          <menu className="w-full flex items-center justify-between text-3xl">
            <h1 className="text-white">
              We deliver <span className="text-secondary text-3xl">value</span>
            </h1>
            <Button className="!text-2xl !px-12 !border-primary" primary>
              Let's talk
            </Button>
          </menu>
        </section>
      </main>
    </PublicLayout>
  );
};

export default Home;
