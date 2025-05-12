
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-bzr-dark-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/ce64b743-c936-4927-9972-777d72d442cc.png" 
                alt="БЗР Банк" 
                className="h-12 w-12 bg-white rounded-full p-1"
              />
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-xl">БЗР Банк</span>
                <span className="text-gray-300 text-xs">Банк защиты и развития</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mt-4 max-w-xs">
              Доверие и партнерство — ключ к успеху. Мы обеспечиваем надежную поддержку наших клиентов в сфере гособоронзаказа и предлагаем выгодные условия для всех.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-bzr-light-blue transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-bzr-light-blue transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-bzr-light-blue transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-bzr-light-blue transition-colors">
                <Icon name="Linkedin" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/gos" className="text-gray-300 hover:text-white transition-colors">Гособоронзаказ</Link>
              </li>
              <li>
                <Link to="/services/business" className="text-gray-300 hover:text-white transition-colors">Бизнесу</Link>
              </li>
              <li>
                <Link to="/services/individuals" className="text-gray-300 hover:text-white transition-colors">Частным лицам</Link>
              </li>
              <li>
                <Link to="/services/credits" className="text-gray-300 hover:text-white transition-colors">Кредитование</Link>
              </li>
              <li>
                <Link to="/services/deposits" className="text-gray-300 hover:text-white transition-colors">Вклады и депозиты</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">О банке</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/about/leadership" className="text-gray-300 hover:text-white transition-colors">Руководство</Link>
              </li>
              <li>
                <Link to="/about/career" className="text-gray-300 hover:text-white transition-colors">Карьера</Link>
              </li>
              <li>
                <Link to="/about/news" className="text-gray-300 hover:text-white transition-colors">Новости</Link>
              </li>
              <li>
                <Link to="/documents" className="text-gray-300 hover:text-white transition-colors">Документы</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="MapPin" className="h-5 w-5 mr-2 mt-0.5 text-bzr-light-blue" />
                <span className="text-gray-300">г. Москва, ул. Ленина, д. 12, корп. 1</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 mr-2 text-bzr-light-blue" />
                <span className="text-gray-300">8 (800) 555-35-35</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 mr-2 text-bzr-light-blue" />
                <span className="text-gray-300">info@bzrbank.ru</span>
              </li>
              <li className="pt-2">
                <Button className="bg-bzr-blue hover:bg-bzr-light-blue text-white">
                  <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                  Обратная связь
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} БЗР Банк. Все права защищены.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-white transition-colors mt-2 md:mt-0">Условия использования</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors mt-2 md:mt-0">Карта сайта</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
