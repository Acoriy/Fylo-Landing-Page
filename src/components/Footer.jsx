import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import icons :
import phone from '../assets/images/icon-phone.svg';
import email from '../assets/images/icon-email.svg';
import location from '../assets/images/icon-location.svg';
import logo from '../assets/images/logo.svg';
const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const [contact , setContact] = useState([
    {
      icon: phone,
      text: "+212 689995840",
    },
    {
      icon: email,
      text: "sofyane.acoriy@gmail.com",
    },
  ]);
  // eslint-disable-next-line no-unused-vars
  const [links , setLinks] = useState([
    "About Us",
    "Jobs",
    "Press",
    "Blog",
    "Contact Us",
    "Terms",
    "Privacy",
  ]);

  const [socialmidiaIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px]">
      <div className="container text-white">
        <a href="/" className="">
          <img
            src={logo}
            alt="logo-image"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>

        <div className="mt-[30px] flex justify-between flex-wrap flex-col gap-[15px] md:flex-row">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full ">
            <a href="/">
              <img
                src={location}
                alt="location-icon"
                className="w-[58xp] h-[58px] object-contain"
              />
            </a>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              inventore quaerat hic obcaecati nesciunt nam quos ex tempore
              praesentium quae!
            </p>
          </div>

          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex items-center mb-[15px] last-of-type:mb-0 gap-[15px]"
              >
                <img src={item.icon} alt="icon" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-primary transition-colors duration-200 text-base"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex justify-center gap-[15px] w-full md:w-auto">
            {socialmidiaIcons.map((item) => (
              <li key={item}>
                <a href="/" className="group">
                  <div className="w-[40px] h-[40px] centre-element border border-white rounded-full ">
                    {item === "facebook" ? (
                      <FaFacebookF className="hover-icons-socialmedia" />
                    ) : item === "instagram" ? (
                      <FaInstagram className="hover-icons-socialmedia" />
                    ) : (
                      <FaTwitter className="hover-icons-socialmedia" />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* copyright : */}
      <div className="flex items-center justify-center w-full h-[10px] mt-[60px] text-center mx-auto ">
        <h3 className="text-lg font-semibold text-white">
          Copyright © 2024{" "}
          <a
            href="https://sofyaneacoriy.netlify.app/" target="_blank"
            className="hover:underline"
          >
            Sofyane Acoriy 
          </a>
           | All rights reserved.
        </h3>
      </div>
    </section>
  );
};

export default Footer;
