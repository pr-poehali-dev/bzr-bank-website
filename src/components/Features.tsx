
import React from "react";
import Icon from "@/components/ui/icon";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="w-16 h-16 bg-bzr-bg-blue rounded-full flex items-center justify-center mb-4">
        <Icon name={icon} className="h-8 w-8 text-bzr-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-bzr-dark-blue mb-4">Почему выбирают БЗР Банк</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем комплексные финансовые решения, основанные на принципах надежности, инноваций и индивидуального подхода
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          <Feature 
            icon="ShieldCheck" 
            title="Безопасность и надежность" 
            description="Соответствие всем требованиям ФСБ и ФСО России, используем современные системы защиты данных и транзакций" 
          />
          <Feature 
            icon="BadgeCheck" 
            title="Опыт в гособоронзаказе" 
            description="Многолетний опыт работы с оборонными предприятиями и глубокое понимание специфики отрасли" 
          />
          <Feature 
            icon="Clock" 
            title="Оперативность" 
            description="Быстрое принятие решений, моментальные платежи и высокая скорость обслуживания клиентов" 
          />
          <Feature 
            icon="PersonStanding" 
            title="Индивидуальный подход" 
            description="Персональный менеджер для каждого клиента и разработка индивидуальных финансовых решений" 
          />
          <Feature 
            icon="Award" 
            title="Выгодные условия" 
            description="Конкурентные ставки по кредитам и вкладам, низкие комиссии и специальные предложения" 
          />
          <Feature 
            icon="Smartphone" 
            title="Современные технологии" 
            description="Удобный интернет-банк, мобильное приложение и инновационные сервисы дистанционного обслуживания" 
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
