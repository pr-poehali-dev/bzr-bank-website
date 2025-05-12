
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/ce64b743-c936-4927-9972-777d72d442cc.png" 
              alt="БЗР Банк" 
              className="h-12 w-12"
            />
            <div className="flex flex-col">
              <span className="text-bzr-dark-blue font-montserrat font-bold text-xl">БЗР Банк</span>
              <span className="text-bzr-blue text-xs">Банк защиты и развития</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-bzr-blue font-medium transition-colors">
              Главная
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-bzr-blue font-medium transition-colors">
              Услуги
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-bzr-blue font-medium transition-colors">
              О банке
            </Link>
            <Link to="/contacts" className="text-gray-700 hover:text-bzr-blue font-medium transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-bzr-blue text-bzr-blue hover:bg-bzr-blue hover:text-white">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              8 800 555-35-35
            </Button>
            <Button className="bg-bzr-blue text-white hover:bg-bzr-dark-blue">
              <Icon name="LogIn" className="mr-2 h-4 w-4" />
              Интернет-банк
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-800 transition"
            onClick={toggleMenu}
            aria-label="Меню"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-bzr-blue py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-bzr-blue py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-bzr-blue py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                О банке
              </Link>
              <Link 
                to="/contacts" 
                className="text-gray-700 hover:text-bzr-blue py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <Button className="bg-bzr-blue text-white hover:bg-bzr-dark-blue w-full mt-4">
                <Icon name="LogIn" className="mr-2 h-4 w-4" />
                Интернет-банк
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
