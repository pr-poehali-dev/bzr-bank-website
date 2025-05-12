
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const QrCodeSection = () => {
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://bzrbank.ru";

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-bzr-dark-blue mb-4">
              Банк всегда с вами
            </h2>
            <p className="text-gray-600 mb-6">
              Сканируйте QR-код, чтобы перейти на официальный сайт БЗР Банка. Получите доступ к полной информации о наших услугах и специальных предложениях прямо с вашего мобильного устройства.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-bzr-bg-blue p-2 rounded-full mr-4 mt-1">
                  <Icon name="CheckCircle" className="h-5 w-5 text-bzr-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Интернет-банк 24/7</h4>
                  <p className="text-gray-600">Доступ к вашим счетам и операциям в любое время</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-bzr-bg-blue p-2 rounded-full mr-4 mt-1">
                  <Icon name="CheckCircle" className="h-5 w-5 text-bzr-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Мобильное приложение</h4>
                  <p className="text-gray-600">Банковские услуги у вас в кармане со всеми функциями</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-bzr-bg-blue p-2 rounded-full mr-4 mt-1">
                  <Icon name="CheckCircle" className="h-5 w-5 text-bzr-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Круглосуточная поддержка</h4>
                  <p className="text-gray-600">Профессиональная помощь по любым вопросам в любое время</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button className="bg-bzr-blue hover:bg-bzr-dark-blue text-white">
                <Icon name="Download" className="mr-2 h-4 w-4" />
                Скачать приложение
              </Button>
              <Button variant="outline" className="border-bzr-blue text-bzr-blue hover:bg-bzr-blue hover:text-white">
                <Icon name="PhoneCall" className="mr-2 h-4 w-4" />
                Связаться с нами
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="bg-white p-6 rounded-xl shadow-lg animate-hover">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-bzr-dark-blue">Официальный сайт</h3>
                <p className="text-gray-500">БЗР Банк</p>
              </div>
              <div className="border-4 border-bzr-blue rounded-lg p-2 bg-white">
                <img 
                  src={qrCodeUrl} 
                  alt="QR-код БЗР Банк" 
                  className="w-56 h-56 mx-auto"
                />
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm">
                Отсканируйте для перехода на сайт
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QrCodeSection;
