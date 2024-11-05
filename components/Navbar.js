"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/Logo.svg";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "#Hero" },
    { name: "Services", href: "#ExpertSection" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#BookCall" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav className="sticky top-0 z-50 py-3 bg-[#09272C] w-full">
    <div className="flex items-center justify-between">
      <Link href="#home" onClick={(e) => scrollToSection(e, '#home')}>
        <Image src={Logo} width={40} alt="Logo" />
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6 text-sm items-center">
        {navItems.map((item, index) => (
          <a 
            key={index} 
            href={item.href}
            className="text-white hover:text-[#58f499] transition-colors duration-300"
            onClick={(e) => scrollToSection(e, item.href)}
          >
            {item.name}
          </a>
        ))}
      </div>
      
      {/* Responsive Menu */}
      <div className="hidden lg:flex justify-end">
        <a href="#BookCall">
          <button className="bg-[#B7FEC7] hover:bg-[#58f499] shadow-md text-black font-semibold rounded-md px-[50px] py-[12px] transition-transform duration-300 hover:scale-105 md:px-[50px] md:py-[12px] lg:px-[40px] lg:py-[10px] xl:px-[30px] xl:py-[8px]">Book a Call</button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="lg:hidden mt-4 flex flex-col space-y-4">
        {navItems.map((item, index) => (
          <a 
            key={index} 
            href={item.href}
            className="text-white hover:text-[#58f499] transition-colors duration-300"
            onClick={(e) => scrollToSection(e, item.href)}
          >
            {item.name}
          </a>
        ))}
        <button className='w-full bg-[#B7FEC7] hover:bg-[#58f499] shadow-md text-black font-semibold rounded-md py-[8px] text-sm md:text-base lg:text-lg xl:text-xl'>
          Book a Call
        </button>
      </div>
    )}
</nav>
  );
};

export default Navbar;