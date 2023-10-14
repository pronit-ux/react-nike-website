import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants/index";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-22 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="img" width={160} height={55} />
          </a>
          <p className="mt-7 text-base leading-8 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get Rewards...
          </p>
          <div className="flex items-center gap-6 mt-9">
            {socialMedia.map((icon) => (
              <div
                key={icon.id}
                className="flex justify-center items-center w-14 h-14 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={26} height={26} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-7">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-4 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a> {link.name} </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-3 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={22}
            height={22}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
