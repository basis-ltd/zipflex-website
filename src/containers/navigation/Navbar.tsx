import { Link } from 'react-router-dom';
import { itServicesCategories } from '../../constants/services.constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from '../../components/inputs/Button';

const Navbar = () => {
  const [showServices, setShowServices] = useState({
    show: false,
    category: '',
  });

  return (
    <main className="bg-black w-full">
      <header className="h-[12vh] z-[1000] flex items-center justify-between w-[75%] mx-auto">
        <figure className="min-w-[20%]">
          <h1 className="text-white text-2xl">Logo</h1>
        </figure>
        <nav className="w-full flex items-center gap-6 justify-end">
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
          <Button>Contact Us</Button>
        </nav>
      </header>
    </main>
  );
};

export default Navbar;
