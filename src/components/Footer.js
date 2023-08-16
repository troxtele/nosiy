import Link from "next/link";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => (
  <section className={`flex justify-center items-center  flex-col pb-6`}>
    <div className="container">
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8`}>
        <div className="flex flex-col gap-4 col-span-full md:col-span-2 lg:col-span-1">
          <Link rel="stylesheet" href="/">
            <img
              src="/logo.png"
              alt="hoobank"
              className="w-56 object-contain"
            />
          </Link>

          <p className={`font-poppins font-normal text-gradient text-[18px]`}>
            A new way to make streaming easy, fun and rewarding.
          </p>
        </div>

        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col mb-8 lg:justify-self-end`}
          >
            <h4 className="font-poppins font-medium text-[18px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none grid mt-4 gap-3">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] text-dimWhite hover:text-secondary cursor-pointer transition-all duration-200`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* footer bottom */}
      <div className="grid justify-center sm:flex sm:justify-between gap-4 pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-sm text-dimWhite">
          Copyright Ⓒ 2023 Nosiy.com. All Rights Reserved.
        </p>

        <div className="flex gap-4 justify-center">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
