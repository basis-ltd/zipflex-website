import { Link } from 'react-router-dom';
import { itServicesCategories } from '../../constants/services.constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faBars,
  faChevronCircleDown,
  faChevronDown,
  faChevronUp,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler, useState } from 'react';
import Button from '../../components/inputs/Button';

const Navbar = ({
  onCallToAction,
}: {
  onCallToAction?: MouseEventHandler<HTMLAnchorElement>;
}) => {
  const [showServices, setShowServices] = useState({
    show: false,
    category: '',
  });
  const [showMenu, setShowMenu] = useState(false);

  return (
    <main className="bg-black w-full fixed z-[10000]">
      <header className="h-[12vh] z-[1000] flex items-center justify-between w-[75%] mx-auto relative">
        <Link
          to={'/'}
          className="min-w-[10%] bg-black rounded-md p-1 flex items-center justify-center"
        >
          <img
            className="w-20 h-full"
            src="https://res.cloudinary.com/nishimweprince/image/upload/v1721593300/zipflex/zipflex_logo_w7xmxf.png"
          />
        </Link>
        <nav className="w-full flex items-center gap-6 justify-end max-lg:hidden">
          {Object.entries(itServicesCategories)?.map(
            ([category, services], index: number) => {
              return (
                <menu key={index} className="flex flex-col gap-1 relative">
                  <ul
                    onMouseEnter={(e) => {
                      e.preventDefault();
                      setShowServices({
                        show: true,
                        category: category,
                      });
                    }}
                    className="flex z-[10000] items-center h-[9vh] transition-all ease-in-out duration-300 hover:scale-[1.01] gap-2 text-white hover:text-[#FFD700] cursor-pointer"
                  >
                    <Link
                      to={'#'}
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="text-lg"
                    >
                      {category}
                    </Link>
                    <FontAwesomeIcon icon={faChevronCircleDown} />
                  </ul>
                  <ul
                    className={`flex z-[10000] flex-col gap-5 min-w-[200px] bg-white p-3 rounded-sm absolute transition-all duration-700 ease-in-out ${
                      showServices?.show && showServices?.category === category
                        ? 'translate-y-[70px]'
                        : 'translate-y-[-400px]'
                    }`}
                    onMouseLeave={(e) => {
                      e.preventDefault();
                      setShowServices({
                        show: false,
                        category: '',
                      });
                    }}
                  >
                    {services.map((service) => {
                      return (
                        <li key={service.name}>
                          <Link
                            to={service.path}
                            className="text-black hover:text-primary hover:font-bold"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            {service.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </menu>
              );
            }
          )}
          <Button onClick={onCallToAction}>Contact Us</Button>
        </nav>
        <FontAwesomeIcon
          icon={showMenu ? faX : faBars}
          onClick={(e) => {
            e.preventDefault();
            setShowMenu(!showMenu);
          }}
          className="hidden text-white text-xl cursor-pointer transition-all ease-in-out duration-300 hover:scale-[1.01] max-lg:block"
        />
      </header>
      <NavbarMenuDropdown isOpen={showMenu} />
    </main>
  );
};

export const NavbarMenuDropdown = ({ isOpen }: { isOpen: boolean }) => {
  // STATE VARIABLES
  const [showServices, setShowServices] = useState({
    show: false,
    category: '',
  });

  return (
    <header
      className={`flex flex-col gap-3 justify-between py-5 transition-all duration-500 min-h-[40vh] bg-white ease-in-out absolute z-[1000000] w-[300px] max-w-[75%] right-[12.5%] ${
        isOpen ? 'translate-y-0' : 'translate-y-[-1000px]'
      } text-black`}
    >
      <nav className="flex flex-col gap-3">
        {Object.entries(itServicesCategories)?.map(
          ([category, services], index: number) => {
            const isExpanded =
              showServices?.show && showServices?.category === category;
            return (
              <menu key={index}>
                <Link
                  to={'#'}
                  className={`${
                    isExpanded && 'border border-dashed border-black'
                  } text-lg w-full flex items-center gap-3 justify-between px-2 min-h-[7vh]`}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowServices({
                      show: isExpanded ? false : true,
                      category: category,
                    });
                  }}
                >
                  {category}
                  <FontAwesomeIcon
                    icon={isExpanded ? faChevronUp : faChevronDown}
                  />
                </Link>
                <ul
                  className={`flex z-[10000] flex-col gap-5 w-full bg-white p-3 rounded-sm transition-all ease-in-out ${
                    isExpanded ? 'block' : 'hidden'
                  }`}
                >
                  {services.map((service) => {
                    return (
                      <li key={service.name}>
                        <Link
                          to={service.path}
                          className="text-black hover:text-primary hover:font-bold flex items-center gap-3 justify-between"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          {service.name}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </menu>
            );
          }
        )}
      </nav>
      <Button
        primary
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById('contact');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mx-4"
      >
        Contact Us
      </Button>
    </header>
  );
};

export default Navbar;
