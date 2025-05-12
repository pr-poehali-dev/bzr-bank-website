
import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  color: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, link, color }) => {
  return (
    <div className="service-card group">
      <div className={`w-14 h-14 ${color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon name={icon} className="text-white h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="flex items-center text-bzr-blue font-medium hover:text-bzr-dark-blue transition"
      >
        Подробнее
        <Icon name="ArrowRight" className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: "Shield",
      title: "Госзаказ и ОПК",
      description: "Специализированные банковские решения для предприятий, работающих с государственными оборонными заказами",
      link: "/services/gos",
      color: "bg-bzr-blue"
    },
    {
      icon: "Building2",
      title: "Корпоративным клиентам",
      description: "Расчетно-кассовое обслуживание, кредитование и другие услуги для бизнеса любого масштаба",
      link: "/services/corporate",
      color: "bg-bzr-dark-blue"
    },
    {
      icon: "User",
      title: "Частным лицам",
      description: "Выгодные условия по вкладам, кредитам, дебетовые и кредитные карты с кэшбэком",
      link: "/services/individuals",
      color: "bg-bzr-light-blue"
    },
    {
      icon: "CreditCard",
      title: "Банковские карты",
      description: "Современные платежные карты с повышенным кэшбэком и широкими возможностями использования",
      link: "/services/cards",
      color: "bg-bzr-blue"
    },
    {
      icon: "PiggyBank",
      title: "Вклады и депозиты",
      description: "Высокодоходные вклады с гибкими условиями размещения средств и государственной защитой",
      link: "/services/deposits",
      color: "bg-bzr-light-blue"
    },
    {
      icon: "Landmark",
      title: "Инвестиции",
      description: "Брокерское обслуживание, доверительное управление и другие инвестиционные продукты",
      link: "/services/investments",
      color: "bg-bzr-dark-blue"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-bzr-dark-blue mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            БЗР Банк предлагает широкий спектр банковских услуг как для организаций, так и для частных лиц
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
