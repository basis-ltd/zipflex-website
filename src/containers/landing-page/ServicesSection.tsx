import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { itServices } from '../../constants/services.constants';
import {
  faArrowDown,
  faArrowRight,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { MouseEventHandler, useState } from 'react';
import Button from '../../components/inputs/Button';

const ServicesSection = ({
  onCallToAction,
}: {
  onCallToAction?: MouseEventHandler<HTMLAnchorElement>;
}) => {
  return (
    <main className="bg-secondary min-h-[88vh]">
      <section className="w-[75%] mx-auto py-[7%] flex flex-col gap-12">
        <h1 className="text-4xl font-black">Various ways we can help you</h1>
        <menu className="flex flex-col">
          {itServices?.map((service, index: number) => {
            return <ServicesCard key={index} service={service} index={index} />;
          })}
        </menu>
        <Button
          className="w-[50%] !text-xl !h-[7vh] max-[650px]:!w-full max-[650px]:!text-lg"
          primary
          onClick={onCallToAction}
        >
          Again, let's talk
        </Button>
      </section>
    </main>
  );
};

export default ServicesSection;

export const ServicesCard = ({
  service,
  index,
}: {
  service: {
    name: string;
    description: string;
    image: string;
  };
  index: number;
}) => {
  const [showServiceDescription, setShowServiceDescription] = useState(false);

  return (
    <Link
      to={'#'}
      onClick={(e) => {
        e.preventDefault();
        setShowServiceDescription(!showServiceDescription);
      }}
      className="flex items-start gap-5 px-4 w-full min-h-[10vh] border-y border-[#D9BA32] max-[650px]:flex max-[650px]:flex-col max-[650px]:items-center"
    >
      <figure className="flex items-start w-full mt-4">
        <img
          src={service.image}
          alt={service.name}
          className="w-[30px] h-full object-cover"
        />
      </figure>
      <section className="flex flex-col w-full items-start gap-4 py-4">
        <menu className="flex w-full items-center gap-3 justify-between">
          <ul className="flex items-center gap-4">
            <p className="text-2xl font-bold">0{index + 1}</p>
            <h1 className="text-3xl font-bold max-[950px]:text-2xl max-[850]:text-xl">
              {service.name}
            </h1>
          </ul>
          <FontAwesomeIcon
            className="text-[16px] h-6 transition-all ease-in-out duration-300"
            icon={showServiceDescription ? faMinus : faArrowDown}
          />
        </menu>
        {showServiceDescription && (
          <menu className="flex flex-col gap-4 items-start">
            <p
              className={`${
                showServiceDescription ? 'text-[15px]' : 'h-0 display-none'
              }`}
            >
              {service?.description}
            </p>
            <FontAwesomeIcon
              className="bg-primary text-white text-[18px] p-3 px-[12.3px] rounded-full transition-all ease-in-out duration-300 hover:scale-[1.01]"
              icon={faArrowRight}
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          </menu>
        )}
      </section>
    </Link>
  );
};
