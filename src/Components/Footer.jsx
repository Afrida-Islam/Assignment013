import React from "react";
import { Instagram, Twitter, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white px-6 py-20 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left Column: Brand & Bio */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-11 h-11 bg-[#E87D4E] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200 group-hover:rotate-6 transition-transform duration-300">
                <MapPin className="text-white w-6 h-6 fill-current" />
              </div>
              <span className="text-2xl font-black tracking-tight text-zinc-900">
                Revme<span className="text-[#E87D4E]">.</span>
              </span>
            </div>

            <p className="text-zinc-500 text-base leading-relaxed max-w-sm">
              Helping local service businesses dominate search rankings and
              automate trust-building through seamless Google review management.
            </p>

            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </div>

          {/* Right Columns: Navigation */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <FooterLinkGroup
              title="Product"
              links={["Features", "Automations", "Integrations", "Pricing"]}
            />
            <FooterLinkGroup
              title="Company"
              links={["About Us", "Success Stories", "Contact", "Careers"]}
            />
            <FooterLinkGroup
              title="Legal"
              links={["Terms of Service", "Privacy Policy", "Cookie Policy"]}
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm font-medium">
            © {currentYear} Revme Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-zinc-400 text-xs hover:text-[#E87D4E] cursor-pointer transition-colors">
              System Status
            </span>
            <span className="text-zinc-400 text-xs hover:text-[#E87D4E] cursor-pointer transition-colors">
              Security
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLinkGroup = ({ title, links }) => (
  <div className="flex flex-col gap-6">
    <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-widest">
      {title}
    </h4>
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li
          key={link}
          className="group flex items-center text-zinc-500 hover:text-[#E87D4E] cursor-pointer transition-all duration-200 text-[15px] font-medium"
        >
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            {link}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ icon }) => (
  <button className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-600 hover:bg-[#E87D4E] hover:text-white hover:shadow-md hover:shadow-orange-200 transition-all duration-300">
    {icon}
  </button>
);

export default Footer;
