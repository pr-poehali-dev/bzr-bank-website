
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-bzr-dark-blue to-bzr-blue">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Начните сотрудничество с БЗР Банком уже сегодня
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
          Доверие и партнерство — ключ к успеху. Мы готовы предложить вам индивидуальные финансовые решения для вашего бизнеса или личных потребностей.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button className="bg-white text-bzr-dark-blue hover:bg-gray-100 px-8 py-6 text-lg">
            <Icon name="FileText" className="mr-2 h-5 w-5" />
            Оставить заявку
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            <Icon name="Phone" className="mr-2 h-5 w-5" />
            Связаться с нами
          </Button>
        </div>
        <div className="mt-12 flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">24/7</span>
            <span className="text-white/80 mt-2">Поддержка</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">100+</span>
            <span className="text-white/80 mt-2">Офисов</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">15+</span>
            <span className="text-white/80 mt-2">Лет опыта</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">500k+</span>
            <span className="text-white/80 mt-2">Клиентов</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
