"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

/**
 * Footer component that displays the footer section.
 *
 * @returns {React.ReactElement}
 */
export default function Footer(): React.ReactElement {
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://x.com/BharatGenTech",
      icon: <Twitter className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bharatgen",
      icon: <Instagram className="h-6 w-6" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/bharatgen-technologie",
      icon: <Linkedin className="h-6 w-6" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61574816939230",
      icon: <Facebook className="h-6 w-6" />,
    },
  ];

  const quickLinks = [
    {
      name: "Services",
      href: "https://bharatgentechnologies.vercel.app/services",
    },
    {
      name: "Projects",
      href: "https://bharatgentechnologies.vercel.app/projects",
    },
    {
      name: "Community",
      href: "https://bharatgentechnologies.vercel.app/community",
    },
    {
      name: "Contact",
      href: "https://bharatgentechnologies.vercel.app/contact",
    },
  ];

  const resources = [
    {
      name: "Web & App",
      href: "https://bharatgentechnologies.vercel.app/webapp",
    },
    {
      name: "Software",
      href: "https://bharatgentechnologies.vercel.app/software",
    },
    { name: "Blog", href: "https://bharatgentechnologies.vercel.app" },
    {
      name: "Support",
      href: "https://bharatgentechnologies.vercel.app/contact",
    },
  ];

  const company = [
    {
      name: "About Us",
      href: "https://bharatgentechnologies.vercel.app/about",
    },
    {
      name: "Careers",
      href: "https://bharatgentechnologies.vercel.app/careers",
    },
    {
      name: "Brochure",
      href: "https://drive.google.com/file/d/1UG2nL4X7FeFMzURf8kiFQhpxAxMXkCsh/view?usp=sharing",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-900 pb-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Link href="https://bharatgentechnologies.vercel.app" className="mb-4 inline-block">
                <img
                  src="/Bhlogo.png"
                  alt="BharatGen Logo"
                  className="h-10"
                />
              </Link>
              <p className="text-gray-600 text-sm max-w-sm">
                BharatGen empowers businesses to thrive by transforming complex
                challenges into clear, compelling digital solutions—making
                insights easier to share, understand, and act on.
              </p>
              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                {company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-sm text-gray-500">
            <p className="mb-4 sm:mb-0">
              &copy; {new Date().getFullYear()} BharatGen Technologies. All
              rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="hover:text-teal-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-teal-600 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
