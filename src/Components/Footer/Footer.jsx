import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white footerpart">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-14">
          {/* Left Section */}
          <div className="lg:w-1/3 space-y-4">
            <a href="/" className="flex items-center">
              <img
                src="/dr_soma_logo.png"
                className="h-11 w-auto me-3 object-contain"
                alt="Dr Soma Logo"
              />
              <span className="text-2xl font-semibold text-white">
                DR. SOMA PLASTIC SURGERY
              </span>
            </a>

            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Dedicated to delivering safe, ethical, and natural-looking
              aesthetic and reconstructive results. Combining advanced medical
              expertise with personalized patient care.
            </p>

            <div className="space-y-2 text-gray-400 text-base">
              <a className="block hover:text-white transition" href="">
                Home
              </a>
              <a className="block hover:text-white transition" href="">
                About
              </a>
              <a className="block hover:text-white transition" href="">
                Services
              </a>
              <a className="block hover:text-white transition" href="">
                Success Stories
              </a>
              <a className="block hover:text-white transition" href="">
                Blog
              </a>
              <a className="block hover:text-white transition" href="">
                Contact
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-lg mt-3 font-semibold uppercase mb-3 text-white">
                Business Hours
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Monday – Friday: 9:00 AM – 5:00 PM <br />
                Saturday: 9:00 AM – 1:00 PM <br />
                Sunday & Public Holidays: Closed
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold uppercase mb-3 text-white">
                Clinic Address
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Klinik Plastic Surgery Soma <br />
                45B, 2nd Floor, Jalan SS15/5A <br />
                47500 Subang Jaya, Selangor <br />
                Malaysia
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-lg mt-3 font-semibold uppercase text-white">
              Contact Us
            </h2>

            <div className="space-y-5 text-gray-400 text-base">
              <div className="flex items-center gap-4 hover:text-white transition">
                <FaEnvelope className="text-xl text-white" />
                <a href="mailto:info@drsoma.com">enquiry.drsoma@gmail.com</a>
              </div>

              <div className="flex items-center gap-4 hover:text-white transition">
                <FaPhoneAlt className="text-xl text-white" />
                <a href="tel:+60123456789">603 5887 4422</a>
              </div>

              <div className="flex items-center gap-4 hover:text-white transition">
                <FaWhatsapp className="text-xl text-white" />
                <a
                  href="https://wa.me/60123456789"
                  target="_blank"
                  rel="noreferrer"
                >
                 014 261 6007
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <span className="text-gray-400 text-sm">
            Copyright © 2023. SJ Clinical Aesthetics Sdn Bhd 200401017853 (656356-A). All Rights Reserved.
          </span>

          <div className="flex space-x-5 text-2xl text-gray-400">
            <a className="hover:text-white transition" href="#">
              <FaInstagram />
            </a>
            <a className="hover:text-white transition" href="#">
              <FaFacebook />
            </a>
            <a className="hover:text-white transition" href="#">
              <FaYoutube />
            </a>
            <a className="hover:text-white transition" href="#">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
