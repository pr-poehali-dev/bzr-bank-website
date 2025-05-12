
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="bg-bzr-bg-blue w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <Icon name={icon} className="h-6 w-6 text-bzr-blue" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-bzr-bg-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-bzr-dark-blue mb-4">Услуги БЗР Банка</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Комплексные финансовые решения для бизнеса и частных лиц с фокусом на предприятия, работающие с гособоронзаказом
              </p>
            </div>

            <Tabs defaultValue="gos" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-3 bg-white w-full md:w-auto">
                  <TabsTrigger value="gos">Гособоронзаказ</TabsTrigger>
                  <TabsTrigger value="business">Для бизнеса</TabsTrigger>
                  <TabsTrigger value="individual">Частным лицам</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="gos">
                <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-md">
                  <h2 className="text-2xl font-bold text-bzr-dark-blue mb-6 flex items-center">
                    <Icon name="Shield" className="mr-3 h-6 w-6 text-bzr-blue" />
                    Обслуживание гособоронзаказа
                  </h2>
                  <p className="text-gray-600 mb-8">
                    БЗР Банк предлагает полный спектр услуг по сопровождению гособоронзаказа в соответствии с требованиями Федерального закона №275-ФЗ "О государственном оборонном заказе".
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex">
                      <div className="bg-bzr-bg-blue p-2 rounded-full mr-4 h-fit">
                        <Icon name="Check" className="h-5 w-5 text-bzr-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Открытие и ведение отдельных счетов</h4>
                        <p className="text-gray-600 text-sm">Предоставление полного комплекса банковского сопровождения контрактов в рамках гособоронзаказа</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-bzr-bg-blue p-2 rounded-full mr-4 h-fit">
                        <Icon name="Check" className="h-5 w-5 text-bzr-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Мониторинг расчетов</h4>
                        <p className="text-gray-600 text-sm">Контроль целевого использования денежных средств в соответствии с законодательством</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-bzr-bg-blue p-2 rounded-full mr-4 h-fit">
                        <Icon name="Check" className="h-5 w-5 text-bzr-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Консультационная поддержка</h4>
                        <p className="text-gray-600 text-sm">Помощь в подготовке документов и сопровождение всех этапов исполнения контракта</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-bzr-bg-blue p-2 rounded-full mr-4 h-fit">
                        <Icon name="Check" className="h-5 w-5 text-bzr-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Банковские гарантии</h4>
                        <p className="text-gray-600 text-sm">Оформление всех видов гарантий для участников государственных закупок</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-bzr-bg-blue p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-semibold text-bzr-dark-blue mb-3">Преимущества работы с БЗР Банком:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Icon name="ArrowRight" className="h-4 w-4 text-bzr-blue mr-2" />
                        <span>Многолетний опыт работы с предприятиями ОПК</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="ArrowRight" className="h-4 w-4 text-bzr-blue mr-2" />
                        <span>Сертифицированные системы защиты информации</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="ArrowRight" className="h-4 w-4 text-bzr-blue mr-2" />
                        <span>Оперативность в принятии решений</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="ArrowRight" className="h-4 w-4 text-bzr-blue mr-2" />
                        <span>Индивидуальное сопровождение каждого клиента</span>
                      </li>
                    </ul>
                  </div>

                  <Button className="bg-bzr-blue hover:bg-bzr-dark-blue text-white">
                    <Icon name="FileText" className="mr-2 h-4 w-4" />
                    Подать заявку на обслуживание ГОЗ
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="business">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard 
                    icon="Landmark" 
                    title="Расчетно-кассовое обслуживание" 
                    description="Выгодные тарифы на РКО, бесплатное открытие счета, удобный интернет-банк для бизнеса с широким функционалом" 
                  />
                  <ServiceCard 
                    icon="CreditCard" 
                    title="Корпоративные карты" 
                    description="Бизнес-карты с возможностью управления лимитами, кэшбэком и упрощенной отчетностью по расходам" 
                  />
                  <ServiceCard 
                    icon="PiggyBank" 
                    title="Депозиты для бизнеса" 
                    description="Выгодные условия размещения свободных средств компании с возможностью пополнения и частичного снятия" 
                  />
                  <ServiceCard 
                    icon="DollarSign" 
                    title="Кредитование бизнеса" 
                    description="Широкая линейка кредитных продуктов для развития бизнеса, включая инвестиционное кредитование и оборотные средства" 
                  />
                  <ServiceCard 
                    icon="FileCheck" 
                    title="Банковские гарантии" 
                    description="Оперативное оформление всех видов гарантий для участия в тендерах и госзакупках" 
                  />
                  <ServiceCard 
                    icon="Globe" 
                    title="Внешнеэкономическая деятельность" 
                    description="Полный комплекс услуг по валютному контролю и международным расчетам с выгодными тарифами" 
                  />
                </div>
              </TabsContent>

              <TabsContent value="individual">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard 
                    icon="CreditCard" 
                    title="Банковские карты" 
                    description="Дебетовые и кредитные карты с кэшбэком до 7%, бесплатным обслуживанием и дополнительными привилегиями" 
                  />
                  <ServiceCard 
                    icon="DollarSign" 
                    title="Потребительские кредиты" 
                    description="Низкие ставки от 7,9%, быстрое рассмотрение заявки и минимальный пакет документов" 
                  />
                  <ServiceCard 
                    icon="Home" 
                    title="Ипотека" 
                    description="Выгодные условия ипотечного кредитования, включая программы с господдержкой и специальные условия для военнослужащих" 
                  />
                  <ServiceCard 
                    icon="PiggyBank" 
                    title="Вклады и накопления" 
                    description="Высокие ставки по вкладам до 10% годовых, гибкие условия с возможностью пополнения и частичного снятия" 
                  />
                  <ServiceCard 
                    icon="Smartphone" 
                    title="Мобильный банк" 
                    description="Удобное мобильное приложение для управления финансами без визита в офис" 
                  />
                  <ServiceCard 
                    icon="Landmark" 
                    title="Инвестиции и вложения" 
                    description="Брокерское обслуживание, индивидуальные инвестиционные счета и помощь профессиональных консультантов" 
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
