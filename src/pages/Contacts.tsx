import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ContactPerson {
  name: string;
  position: string;
  phone: string;
  email: string;
  region?: string;
  department?: string;
  photoUrl: string;
}

const ContactsPage = () => {
  const bankRepresentatives: ContactPerson[] = [
    {
      name: "Малышева Екатерина",
      position: "Руководитель отдела обслуживания ГОЗ",
      phone: "+7 904 912-60-42",
      email: "malysheva@bzrbank.ru",
      department: "Гособоронзаказ",
      photoUrl:
        "https://cdn.poehali.dev/files/95a6fc43-1149-4d33-8696-c1c816af232b.jpg",
    },
    {
      name: "Кузнецова Анастасия",
      position: "Менеджер по работе с корпоративными клиентами",
      phone: "+7 908 158-69-88",
      email: "kuznetsova@bzrbank.ru",
      department: "Корпоративный бизнес",
      photoUrl:
        "https://cdn.poehali.dev/files/aeecde17-5fe5-4f91-a75a-ab928a42ccac.jpg",
    },
    {
      name: "Снегова Валерия",
      position: "Специалист по банковским гарантиям",
      phone: "+7 952 450-98-00",
      email: "snegova@bzrbank.ru",
      department: "Гособоронзаказ",
      photoUrl:
        "https://cdn.poehali.dev/files/d935429f-1074-4552-b1ec-58928cdfb320.jpg",
    },
    {
      name: "Большакова Дарья",
      position: "Руководитель направления розничного бизнеса",
      phone: "+7 902 689-94-15",
      email: "bolshakova@bzrbank.ru",
      department: "Розничный бизнес",
      photoUrl:
        "https://cdn.poehali.dev/files/1c571eaf-f479-4d92-972e-61d8ebee3bd9.jpg",
    },
    {
      name: "Дружинина Виктория",
      position: "Специалист по VIP-обслуживанию",
      phone: "+7 996 008-48-07",
      email: "druzhinina@bzrbank.ru",
      department: "Розничный бизнес",
      photoUrl:
        "https://cdn.poehali.dev/files/08233ef3-f3c9-4952-8c98-2ee583b07e3b.jpg",
    },
  ];

  const branches = [
    {
      city: "Москва",
      address: "ул. Ленина, 12, корп. 1",
      phone: "8 (800) 555-35-35",
      workingHours: "Пн-Пт: 9:00-20:00, Сб: 10:00-17:00",
      coordinates: [55.753215, 37.622504],
    },
    {
      city: "Санкт-Петербург",
      address: "Невский проспект, 78",
      phone: "8 (800) 555-35-36",
      workingHours: "Пн-Пт: 9:00-20:00, Сб: 10:00-17:00",
      coordinates: [59.932634, 30.350477],
    },
    {
      city: "Екатеринбург",
      address: "ул. Малышева, 53",
      phone: "8 (800) 555-35-37",
      workingHours: "Пн-Пт: 9:00-20:00, Сб: 10:00-16:00",
      coordinates: [56.837648, 60.596844],
    },
    {
      city: "Новосибирск",
      address: "Красный проспект, 65",
      phone: "8 (800) 555-35-38",
      workingHours: "Пн-Пт: 9:00-19:00, Сб: 10:00-16:00",
      coordinates: [55.030204, 82.92043],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-bzr-bg-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-bzr-dark-blue mb-4">
                Контакты
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Свяжитесь с нами для получения консультации или дополнительной
                информации о наших услугах
              </p>
            </div>

            <Tabs defaultValue="representatives" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-3 bg-white w-full md:w-auto">
                  <TabsTrigger value="representatives">
                    Представители
                  </TabsTrigger>
                  <TabsTrigger value="branches">Отделения</TabsTrigger>
                  <TabsTrigger value="feedback">Обратная связь</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="representatives">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bankRepresentatives.map((person, index) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <div className="flex items-center mb-2">
                          <span className="inline-flex items-center justify-center bg-bzr-bg-blue w-10 h-10 rounded-full mr-4">
                            <Icon
                              name="User"
                              className="h-5 w-5 text-bzr-blue"
                            />
                          </span>
                          <div>
                            <CardTitle className="text-lg">
                              {person.name}
                            </CardTitle>
                            <CardDescription className="text-bzr-blue font-medium">
                              {person.department}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-500 mb-4">{person.position}</p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Icon
                              name="Phone"
                              className="h-4 w-4 mr-2 text-bzr-blue"
                            />
                            <span>{person.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Icon
                              name="Mail"
                              className="h-4 w-4 mr-2 text-bzr-blue"
                            />
                            <span>{person.email}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full border-bzr-blue text-bzr-blue hover:bg-bzr-blue hover:text-white"
                        >
                          <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
                          Написать сообщение
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="branches">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {branches.map((branch, index) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <div className="flex items-center mb-2">
                          <span className="inline-flex items-center justify-center bg-bzr-bg-blue w-10 h-10 rounded-full mr-4">
                            <Icon
                              name="Building"
                              className="h-5 w-5 text-bzr-blue"
                            />
                          </span>
                          <div>
                            <CardTitle className="text-lg">
                              БЗР Банк в г. {branch.city}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start">
                            <Icon
                              name="MapPin"
                              className="h-4 w-4 mr-2 mt-1 text-bzr-blue"
                            />
                            <span>{branch.address}</span>
                          </div>
                          <div className="flex items-center">
                            <Icon
                              name="Phone"
                              className="h-4 w-4 mr-2 text-bzr-blue"
                            />
                            <span>{branch.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Icon
                              name="Clock"
                              className="h-4 w-4 mr-2 text-bzr-blue"
                            />
                            <span>{branch.workingHours}</span>
                          </div>
                        </div>

                        <div className="w-full h-48 bg-gray-200 rounded-md overflow-hidden">
                          <iframe
                            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d${branch.coordinates[1]}!3d${branch.coordinates[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzExLjYiTiAzN8KwMzcnMjEuMCJF!5e0!3m2!1sru!2sru!4v1620000000000!5m2!1sru!2sru`}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title={`БЗР Банк в г. ${branch.city}`}
                          ></iframe>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-bzr-blue hover:bg-bzr-dark-blue text-white">
                          <Icon name="Navigation" className="mr-2 h-4 w-4" />
                          Построить маршрут
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="feedback">
                <Card className="max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle>Обратная связь</CardTitle>
                    <CardDescription>
                      Заполните форму, и наши специалисты свяжутся с вами в
                      ближайшее время
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Имя
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bzr-blue"
                            placeholder="Введите ваше имя"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bzr-blue"
                            placeholder="Введите ваш email"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Телефон
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bzr-blue"
                            placeholder="+7 (___) ___-__-__"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="topic"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Тема обращения
                          </label>
                          <select
                            id="topic"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bzr-blue"
                          >
                            <option value="">Выберите тему</option>
                            <option value="gos">Гособоронзаказ</option>
                            <option value="business">Услуги для бизнеса</option>
                            <option value="individual">Частным лицам</option>
                            <option value="other">Другое</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Сообщение
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bzr-blue"
                          placeholder="Введите ваше сообщение"
                        ></textarea>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="agree"
                          className="mt-1 mr-2"
                        />
                        <label
                          htmlFor="agree"
                          className="text-sm text-gray-600"
                        >
                          Я согласен на обработку персональных данных в
                          соответствии с{" "}
                          <a
                            href="/privacy"
                            className="text-bzr-blue hover:underline"
                          >
                            политикой конфиденциальности
                          </a>
                        </label>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-bzr-blue hover:bg-bzr-dark-blue text-white">
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Отправить сообщение
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-bzr-dark-blue mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                У вас есть вопросы или предложения? Воспользуйтесь одним из
                способов связи ниже
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 bg-bzr-bg-blue rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Phone" className="h-8 w-8 text-bzr-blue" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                  <p className="mb-4">Круглосуточная поддержка клиентов</p>
                  <a
                    href="tel:88005553535"
                    className="text-bzr-blue font-semibold text-lg hover:underline"
                  >
                    8 (800) 555-35-35
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 bg-bzr-bg-blue rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Mail" className="h-8 w-8 text-bzr-blue" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="mb-4">Общие вопросы и предложения</p>
                  <a
                    href="mailto:info@bzrbank.ru"
                    className="text-bzr-blue font-semibold text-lg hover:underline"
                  >
                    info@bzrbank.ru
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 bg-bzr-bg-blue rounded-full flex items-center justify-center mx-auto">
                    <Icon
                      name="MessageSquare"
                      className="h-8 w-8 text-bzr-blue"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-2">Чат</h3>
                  <p className="mb-4">Онлайн-консультант на сайте</p>
                  <Button className="bg-bzr-blue hover:bg-bzr-dark-blue text-white">
                    Начать чат
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;
