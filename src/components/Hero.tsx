
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative hero-pattern py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-bzr-dark-blue leading-tight mb-4">
              Надежный партнер для <span className="text-bzr-blue">государственных</span> и <span className="text-bzr-blue">частных</span> клиентов
            </h1>
            <p className="text-gray-700 text-lg mb-8 max-w-lg">
              БЗР Банк предлагает специализированные решения для организаций, работающих с гособоронзаказами, и выгодные условия для всех клиентов
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-bzr-blue hover:bg-bzr-dark-blue text-white px-6 py-6 rounded-md">
                <Icon name="Building" className="mr-2 h-5 w-5" />
                Для бизнеса
              </Button>
              <Button variant="outline" className="border-bzr-blue text-bzr-blue hover:bg-bzr-blue hover:text-white px-6 py-6 rounded-md">
                <Icon name="User" className="mr-2 h-5 w-5" />
                Частным клиентам
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <p className="text-bzr-dark-blue font-medium italic border-l-4 border-bzr-blue pl-3">
                "Доверие и партнерство — ключ к успеху"
              </p>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -right-16 -top-16 bg-bzr-blue opacity-10 rounded-full w-64 h-64"></div>
            <div className="absolute -left-16 -bottom-16 bg-bzr-blue opacity-10 rounded-full w-64 h-64"></div>
            <div className="relative z-10 bg-white p-8 rounded-xl shadow-xl animate-fade-in">
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h3 className="text-2xl font-bold text-bzr-dark-blue">Курсы валют</h3>
                <p className="text-gray-500 text-sm">на {new Date().toLocaleDateString('ru-RU')}</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <span className="font-semibold">$</span>
                    </div>
                    <div>
                      <p className="font-semibold">USD</p>
                      <p className="text-xs text-gray-500">Доллар США</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">92.75 ₽</p>
                    <p className="text-xs text-green-600 flex items-center justify-end">
                      <Icon name="TrendingUp" className="h-3 w-3 mr-1" />
                      +0.25
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <span className="font-semibold">€</span>
                    </div>
                    <div>
                      <p className="font-semibold">EUR</p>
                      <p className="text-xs text-gray-500">Евро</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">102.15 ₽</p>
                    <p className="text-xs text-red-600 flex items-center justify-end">
                      <Icon name="TrendingDown" className="h-3 w-3 mr-1" />
                      -0.30
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <span className="font-semibold">¥</span>
                    </div>
                    <div>
                      <p className="font-semibold">CNY</p>
                      <p className="text-xs text-gray-500">Китайский юань</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">13.05 ₽</p>
                    <p className="text-xs text-green-600 flex items-center justify-end">
                      <Icon name="TrendingUp" className="h-3 w-3 mr-1" />
                      +0.15
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="link" className="mt-4 text-bzr-blue w-full">
                Все курсы валют
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
