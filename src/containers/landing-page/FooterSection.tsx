import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <footer className="h-[88vh] bg-black text-white">
      <section className="w-[75%] mx-auto flex flex-col justify-evenly h-full">
        <article className="flex justify-between items-start">
          <menu className="flex flex-col gap-12 w-[20%]">
            <h1 className='text-4xl'>Logo</h1>
            <address className="not-italic text-[#808080] text-xl">
              <h3 className="font-bold">Office:</h3>
              <p>Telecom House,</p>
              <p>Kigali, RW</p>
            </address>
            <p className="text-sm">&copy; {new Date().getFullYear()} Zipflex</p>
            <Link  to="/privacy-policy" className="text-sm">Privacy Policy</Link>
          </menu>
          <menu className="flex flex-col gap-12 w-[75%]">
            <h1 className="text-4xl font-bold leading-tight">
              We are an enterprise software development company that provides next generation solutions for your enterprise.
            </h1>
            <div className="flex flex-col gap-2">
              <p>info@zipflex.rw</p>
              <p>(+250) 788 298 661</p>
            </div>
            <menu className="flex gap-12 mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="text-white text-2xl" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="text-white text-2xl" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-2xl" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl" />
              </a>
            </menu>
          </menu>
        </article>
      </section>
    </footer>
  );
}

export default FooterSection;