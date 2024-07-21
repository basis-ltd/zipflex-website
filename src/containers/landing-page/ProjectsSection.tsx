import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projectsData } from '../../constants/projects.constants';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../../components/inputs/Button';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons/faChevronCircleRight';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../components/ui/carousel';

const ProjectsSection = () => {
  return (
    <main className="min-h-[88vh] bg-white">
      <section className="w-[75%] mx-auto min-h-[88vh] flex flex-col gap-8 items-start justify-between py-[8%]">
        <h1 className="text-6xl text-black flex font-black">Latest Projects</h1>
        <Carousel className="w-full flex items-center flex-wrap gap-12 justify-between text-3xl">
          <CarouselContent>
            {projectsData.map((project, index) => {
              return (
                <CarouselItem key={index} className="basis-1/3">
                  <Link
                    to={`/projects/${project.id}`}
                    key={index}
                    className="flex flex-col items-start gap-4 py-4"
                  >
                    <figure className="w-full h-[300px] transition-all ease-in-out duration-300 hover:scale-[1.02]">
                      <img
                        src={'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <menu className="flex flex-col w-full items-start gap-3">
                      <h1 className="text-xl font-bold flex items-center gap-3">
                        {project.title} <FontAwesomeIcon icon={faArrowRight} />
                      </h1>
                    </menu>
                    <p className="text-lg">{project.description}</p>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious
          size="button"
            className="border-primary bg-primary text-white cursor-pointer hover:bg-primary hover:text-white hover:scale-[1.1] !h-[60px] !w-[60px] transition-all ease-in-out duration-700 translate-x-5"
          />
          <CarouselNext className="border-primary bg-primary text-white cursor-pointer hover:bg-primary hover:text-white hover:scale-[1.1] !h-[60px] !w-[60px] transition-all ease-in-out duration-700 translate-x-[-20px]" />
        </Carousel>
        <menu className="pb-12 w-full flex items-center gap-3 justify-between">
          <ul className="flex flex-col items-start gap-2">
            <h1 className="text-3xl text-black">Want to see more projects?</h1>
            <Link
              to="/projects"
              className="text-2xl text-primary transition-all flex items-center gap-2 ease-in-out duration-300 hover:scale-[1.01] hover:gap-3"
            >
              View all
              <FontAwesomeIcon
                className="text-xl"
                icon={faChevronCircleRight}
              />
            </Link>
          </ul>
          <Button primary className="!h-[6vh] px-12 text-xl align-end">
            Get started with us
          </Button>
        </menu>
      </section>
    </main>
  );
};

export default ProjectsSection;
