import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          {/* Live Events Section */}
          <div className="order-3 md:order-last">
            <p className="font-semibold mb-4">Live events all over the world</p>
            <button className="w-full flex items-center gap-2 p-3 border rounded-lg mb-4">
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              <span>United States</span>
            </button>
            <button className="w-full text-left flex gap-2 items-center p-3">
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none">
                {/* Language icon paths */}
                <path d="M11.0869885,2.7667286 L11.1610498,3.93936529..." fill="#5C6570"/>
                <path d="M13.642295,8 L15.4102704,8..." fill="#5C6570"/>
              </svg>
              <div className="flex flex-col">
                <span>English (US)</span>
                <span className="text-sm text-gray-600">INR Indian Rupee</span>
              </div>
            </button>
          </div>

          {/* Fan Protect Section */}
          <div className="order-first md:order-none">
            <div className="mb-6">
              <Link href="/promise" className="inline-block">
                <Image
                  src="https://img.vggcdn.net/images/Assets/Icons/bfx/fanprotect.724c822d.svg"
                  alt="fan protect guarantee"
                  width={150}
                  height={50}
                />
              </Link>
            </div>
            <ul className="space-y-4">
              {guaranteeItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <item.icon />
                  <p className="text-sm">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <p className="font-semibold mb-4">Our Company</p>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <p className="font-semibold mb-4">Have Questions?</p>
            <ul className="space-y-3">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-6" />
        <div className="py-4 text-sm text-gray-600">
          <p>
            © 2000-2025 StubHub. All Rights Reserved. Use of this website signifies your agreement to our
            <Link href="/legal?section=ua" className="text-blue-600 mx-1">User Agreement</Link>,
            <Link href="/legal?section=pp" className="text-blue-600 mx-1">Privacy Notice</Link> and
            <Link href="/legal?section=cn" className="text-blue-600 mx-1">Cookie Notice</Link>.
          </p>
          <p className="mt-2">
            You are buying tickets from a third party; StubHub is not the ticket seller. 
            Prices are set by sellers and may be above face value.
          </p>
          <button className="mt-4 text-blue-600">
            Do Not Share My Personal Information/Your Privacy Choices
          </button>
        </div>
      </div>
    </footer>
  );
};

// Data arrays
const guaranteeItems = [
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="text-blue-600">
        {/* SVG paths for guarantee icons */}
      </svg>
    ),
    text: "Buy and sell with confidence"
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="text-blue-600">
        {/* SVG paths */}
      </svg>
    ),
    text: "Customer service all the way to your seat"
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="text-blue-600">
        {/* SVG paths */}
      </svg>
    ),
    text: "Every order is 100% guaranteed"
  }
];

const companyLinks = [
  { href: "/about", text: "About Us" },
  { href: "/partners", text: "Partners" },
  { href: "/affiliates", text: "Affiliate Program" },
  { href: "https://developer.stubhub.com", text: "For Developers" },
  { href: "/careers", text: "Careers" }
];

const helpLinks = [
  { href: "/helpCenter", text: "Help Center" },
  { href: "https://stubhub.community", text: "StubHub Community" },
  { href: "/gift-cards", text: "Gift Cards" }
];

export default Footer;