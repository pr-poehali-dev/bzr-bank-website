
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const AboutPage = () => {
  const executives = [
    {
      name: "Александр Петров",
      position: "Председатель правления",
      photoUrl: "",
      bio: "Имеет более 25 лет опыта в банковской сфере. Под его руководством БЗР Банк стал ведущим финансовым учреждением в области обслуживания гособоронзаказа."
    },
    {
      name: "Елена Смирнова",
      position: "Финансовый директор",
      photoUrl: "",
      bio: "Эксперт в области финансового планирования и риск-менеджмента. Отвечает за финансовую устойчивость и эффективность операционной деятельности банка."
    },
    {
      name: "Дмитрий Соколов",
      position: "Директор по работе с ГОЗ",
      photoUrl: "",
      bio: "Специалист по государственному оборонному заказу с 15-летним опытом. Отвечает за разработку и внедрение специализированных банковских продуктов для предприятий ОПК."
    }
  ];

  const milestones = [
    {
      year: "2005",
      title: "Основание банка",
      description: "БЗР Банк был основан группой финансистов и промышленников с целью создания надежного финансового института для обслуживания стратегических отраслей экономики."
    },
    {
      year: "2012",
      title: "Специализация на ГОЗ",
      description: "Банк начал активно развивать направление обслуживания предприятий, работающих по государственному оборонному заказу."
    },
    {
      year: "2014",
      title: "Расширение филиальной сети",
      description: "Открытие представительств в ключевых промышленных центрах России, что позволило обеспечить сервис для предприятий ОПК по всей стране."
    },
    {
      year: "2018",
      title: "Внедрение цифровых технологий",
      description: "Запуск современной системы дистанционного банковского обслуживания и мобильного приложения с расширенными функциями безопасности."
    },
    {
      year: "2020",
      title: "ТОП-50 банков России",
      description: "БЗР Банк вошел в рейтинг 50 крупнейших банков России по размеру активов и надежности обслуживания."
    },
    {
      year: "2023",
      title: "Лидер в сфере ГОЗ",
      description: "Признан лидером в сфере банковского сопровождения государственного оборонного заказа по версии независимых рейтинговых агентств."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-16 bg-bzr-bg-blue">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-bzr-dark-blue mb-6">О БЗР Банке</h1>
                <p className="text-gray-700 text-lg mb-6">
                  БЗР Банк (Банк защиты и развития) — современный финансовый институт, специализирующийся на обслуживании организаций, работающих с государственными оборонными заказами, а также предоставляющий выгодные финансовые услуги для бизнеса и частных лиц.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Check" className="text-bzr-blue mr-3 h-5 w-5" />
                    <p>Лицензия ЦБ РФ №1234 от 01.01.2005</p>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-bzr-blue mr-3 h-5 w-5" />
                    <p>Участник системы страхования вкладов</p>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-bzr-blue mr-3 h-5 w-5" />
                    <p>Собственный капитал более 10 млрд рублей</p>
                  </div>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute -right-12 -top-12 bg-bzr-blue opacity-10 rounded-full w-48 h-48"></div>
                <div className="absolute -left-12 -bottom-12 bg-bzr-blue opacity-10 rounded-full w-48 h-48"></div>
                <img 
                  src="https://cdn.poehali.dev/files/ce64b743-c936-4927-9972-777d72d442cc.png" 
                  alt="БЗР Банк" 
                  className="w-full max-w-md mx-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission and values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-bzr-dark-blue mb-4">Миссия и ценности</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Мы стремимся быть надежным финансовым партнером для предприятий стратегических отраслей экономики и частных лиц
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-bzr-bg-blue border-none shadow-sm h-full">
                <CardContent className="pt-6">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-sm mx-auto">
                    <Icon name="Shield" className="text-bzr-blue h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">Надежность</h3>
                  <p className="text-gray-600 text-center">
                    Мы обеспечиваем высочайший уровень безопасности и стабильности во всех финансовых операциях, что особенно важно при работе с государственными контрактами.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-bzr-blue text-white border-none shadow-sm h-full">
                <CardContent className="pt-6">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-sm mx-auto">
                    <Icon name="Handshake" className="text-bzr-blue h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">Партнерство</h3>
                  <p className="text-white/90 text-center">
                    Мы выстраиваем долгосрочные партнерские отношения с клиентами, основанные на доверии, прозрачности и взаимной выгоде. Доверие и партнерство — ключ к успеху.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-bzr-bg-blue border-none shadow-sm h-full">
                <CardContent className="pt-6">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-sm mx-auto">
                    <Icon name="Lightbulb" className="text-bzr-blue h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">Инновации</h3>
                  <p className="text-gray-600 text-center">
                    Мы постоянно внедряем современные технологии и развиваем новые банковские продукты, чтобы сделать обслуживание максимально эффективным и удобным.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* History timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-bzr-dark-blue mb-4">История банка</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                БЗР Банк прошел долгий путь развития, становясь все более надежным и технологичным партнером для своих клиентов
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    <div className="flex flex-col items-center mr-8">
                      <div className="bg-bzr-blue text-white rounded-full w-14 h-14 flex items-center justify-center font-semibold">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 bg-bzr-blue h-24 opacity-25"></div>
                      )}
                    </div>
                    <div className={`pb-10 ${index === milestones.length - 1 ? 'pb-0' : ''}`}>
                      <h3 className="text-xl font-semibold text-bzr-dark-blue mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-bzr-dark-blue mb-4">Руководство</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Команда профессионалов с многолетним опытом в банковской сфере и глубоким пониманием потребностей клиентов
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {executives.map((executive, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex flex-col items-center mb-4">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={executive.photoUrl} alt={executive.name} />
                      <AvatarFallback className="bg-bzr-blue text-white text-xl">
                        {executive.name.split(' ').map(name => name[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-center">{executive.name}</h3>
                    <p className="text-bzr-blue">{executive.position}</p>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-gray-600 text-center">{executive.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="py-16 bg-bzr-bg-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-bzr-dark-blue mb-4">Признание и награды</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                БЗР Банк регулярно получает признание профессионального сообщества за высокое качество услуг и надежность
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex p-3 rounded-full bg-bzr-bg-blue mb-4">
                  <Icon name="Award" className="h-10 w-10 text-bzr-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Лучший банк по работе с ГОЗ</h3>
                <p className="text-gray-600 text-sm">Национальная банковская премия, 2023</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex p-3 rounded-full bg-bzr-bg-blue mb-4">
                  <Icon name="Trophy" className="h-10 w-10 text-bzr-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">ТОП-20 самых надежных банков</h3>
                <p className="text-gray-600 text-sm">Рейтинг Forbes, 2022</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex p-3 rounded-full bg-bzr-bg-blue mb-4">
                  <Icon name="Star" className="h-10 w-10 text-bzr-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Высокий рейтинг кредитоспособности</h3>
                <p className="text-gray-600 text-sm">Рейтинговое агентство «Эксперт РА», A+ (2023)</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
