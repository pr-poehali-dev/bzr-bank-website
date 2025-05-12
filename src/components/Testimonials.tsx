
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface TestimonialProps {
  quote: string;
  author: string;
  position?: string;
  company?: string;
  avatarUrl?: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  position,
  company,
  avatarUrl,
  rating,
}) => {
  const initials = author
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");

  return (
    <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            name="Star"
            className={`h-5 w-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <blockquote className="text-gray-700 italic mb-6 flex-grow">
        "{quote}"
      </blockquote>
      <div className="flex items-center mt-auto">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src={avatarUrl} alt={author} />
          <AvatarFallback className="bg-bzr-blue text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          {(position || company) && (
            <p className="text-sm text-gray-500">
              {position}
              {position && company && ", "}
              {company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "БЗР Банк стал нашим незаменимым партнером в сфере гособоронзаказа. Благодаря их специализированным решениям и глубокому пониманию отрасли, мы смогли оптимизировать наши финансовые процессы и сосредоточиться на производстве.",
      author: "Алексей Иванов",
      position: "Финансовый директор",
      company: "ОПК-Технологии",
      rating: 5 as const,
    },
    {
      quote:
        "Выгодные условия по вкладам и отличное обслуживание. Очень доволен сотрудничеством с БЗР Банком на протяжении последних 3 лет. Отдельное спасибо моему персональному менеджеру за всегда своевременные консультации.",
      author: "Марина Петрова",
      position: "Предприниматель",
      rating: 5 as const,
    },
    {
      quote:
        "Оперативность в принятии решений и гибкий подход к клиентам - главные преимущества БЗР Банка. Благодаря этому наша компания смогла быстро получить финансирование для важного проекта и выполнить все контрактные обязательства в срок.",
      author: "Сергей Кузнецов",
      position: "Генеральный директор",
      company: "Спецтехсистемы",
      rating: 4 as const,
    },
    {
      quote:
        "Интернет-банк работает безупречно, все операции выполняются мгновенно. Сотрудники всегда вежливы и компетентны. Рекомендую БЗР Банк как надежного финансового партнера для бизнеса и личных финансов.",
      author: "Ольга Смирнова",
      position: "Главный бухгалтер",
      company: "ИТ-Решения",
      rating: 5 as const,
    },
    {
      quote:
        "Лучшие условия по кредитам для оборонной промышленности. БЗР Банк действительно понимает специфику нашего бизнеса и предлагает по-настоящему выгодные финансовые инструменты.",
      author: "Дмитрий Соколов",
      position: "Руководитель департамента",
      company: "Оборонпром",
      rating: 5 as const,
    },
  ];

  return (
    <section className="py-16 bg-bzr-bg-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-bzr-dark-blue mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Узнайте, что говорят о нас клиенты, которые уже оценили надежность и
            качество услуг БЗР Банка
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4"
              >
                <Testimonial {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="mr-2 static transform-none" />
            <CarouselNext className="ml-2 static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
