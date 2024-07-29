import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <footer className="min-h-[88vh] bg-black text-white py-4">
      <section className="w-[75%] mx-auto flex flex-col justify-evenly h-full">
        <article className="flex justify-between gap-3 items-start max-[650px]:flex-col">
          <menu className="flex flex-col gap-12 w-[20%]">
            {/* <img className='w-24' src='https://res.cloudinary.com/nishimweprince/image/upload/v1721593300/zipflex/zipflex_logo_w7xmxf.png' /> */}
            <address className="not-italic text-[#808080] text-xl">
              <h3 className="font-bold">Office:</h3>
              <p>KG 7 Ave</p>
              <p>Kigali Heights</p>
              <p>Kigali, RW</p>
            </address>
            <p className="text-sm">&copy; {new Date().getFullYear()} Zipflex</p>
            <Link  to="/privacy-policy" className="text-sm">Privacy Policy</Link>
          </menu>
          <menu className="flex flex-col gap-12 w-[75%]">
            <h1 className="text-4xl font-bold leading-tight max-[900px]:text-3xl max-[750]:text-2xl max-[650px]:text-xl">
              We are an enterprise software development company that provides next generation solutions for your enterprise.
            </h1>
            <address className="flex flex-col gap-2">
              <p>info@zipflex.rw</p>
              <p>(+250) 788 316 079</p>
            </address>
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