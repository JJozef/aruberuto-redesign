"use client";

import { LearnNow } from "@/components/learn-now";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { Timeline } from "@/components/ui/timeline";
import { WobbleCard } from "@/components/ui/wobble-card";
import { testimonials } from "@/utils/constants";
import { Award, MonitorPlay, ShieldCheck, Star } from "lucide-react";
import Player from "next-video/player";

export default function Home() {
  const data = [
    {
      title: "Conoce a tu Sensei",
      content: (
        <div className="flex flex-col gap-10 mb-44 xl:flex-row">
          <img
            src="/assets/aruberuto.webp"
            alt="Sensei Aruberuto Makoto"
            className="h-60 lg:h-[25rem] w-auto rounded-lg aspect-square object-cover"
          />
          <div className="text-base lg:text-lg">
            <p className="text-pretty">
              Me llamo <b>Alberto Alonso Cividanes</b>, soy un apasionado de la
              cultura y <strong>llevo más de 10 años hablando japonés</strong>.
              Vivo en Japón y esto me ha dado la oportunidad de meterme de lleno
              en todo lo que tiene que ver con este país y su idioma.
            </p>
            <p className="mt-4 text-pretty">
              Siempre quise hablar japonés fluidamente y ahora que lo logré,
              quiero ayudar a mis estudiantes a hacer lo mismo.{" "}
              <strong>
                Mi meta es que ellos puedan cambiar sus vidas aprendiendo
                japonés, así como cambió la mía.
              </strong>
            </p>
            <p className="mt-4 text-pretty">
              Estoy comprometido a acompañarlos en este viaje tan emocionante de
              aprender un nuevo idioma y cultura, y estaré ahí para ver cómo
              ganan confianza y habilidad en japonés.
            </p>
            <div className="flex md:items-center flex-col md:flex-row gap-4 *:text-lg mt-7 lg:mt-10">
              <LearnNow classBtn="mx-0" />
              <Button
                size="lg"
                className="hover:opacity-80"
                variant="secondary"
                onClick={() => window.open("mailto:albertoalonsoesp@gmail.com")}
              >
                Contáctame
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Detalles del curso",
      content: (
        <div className="flex flex-col gap-4 w-full mb-44">
          <WobbleCard
            containerClassName="h-fit relative"
            bgImageClass="bg-center bg-no-repeat bg-cover"
            bgImage={{
              backgroundImage: "url(/assets/aru-1.webp)",
            }}
          >
            <div className="max-w-lg relative z-[3]">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Para Principiantes y Estudiantes Intermedios
              </h2>
              <p className="mt-4 text-left text-white text-sm lg:text-base">
                Este curso es la oportunidad perfecta para aquellos que están
                comenzando desde cero, así como para los estudiantes que ya
                tienen una base y desean ampliar sus conocimientos. No importa
                tu punto de partida; te guio a través de cada etapa de tu
                educación con un enfoque claro y paso a paso.
              </p>
            </div>
          </WobbleCard>
          <WobbleCard
            bgImageClass="bg-[25%_34%] bg-no-repeat bg-cover"
            bgImage={{
              backgroundImage: "url(/assets/aru-2.webp)",
            }}
          >
            <div className="relative z-[3]">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Aprendizaje Flexible y Profundo
              </h2>
              <p className="mt-4 text-left text-white text-sm lg:text-base">
                Cada semana tendrás 3 horas dedicadas al aprendizaje:
                disfrutarás de dos horas de contenido en clases pregrabadas,
                complementadas con una hora de videollamada, en la que podrás
                aclarar tus dudas directamente conmigo y dialogar con tus
                compañeros de curso.
              </p>
            </div>
          </WobbleCard>
          <WobbleCard
            bgImageClass="bg-[25%_11%] bg-no-repeat bg-cover"
            bgImage={{
              backgroundImage: "url(/assets/aru-3.webp)",
            }}
          >
            <div className="max-w-lg z-[1] relative">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Método de Enseñanza
              </h2>
              <p className="mt-4 text-left text-white text-sm lg:text-base">
                Aprende japonés de manera práctica y efectiva, utilizando el
                método que me llevó a mí mismo a conseguirlo: enfocado en el
                lenguaje cotidiano y prescindiendo de lo superfluo. Este enfoque
                te equipará con las herramientas necesarias para, una vez
                finalizado el curso, sumergirte completamente en el aprendizaje
                del japonés, utilizando el propio idioma para avanzar, dejando
                atrás la necesidad de apoyarte en el español.
              </p>
            </div>
          </WobbleCard>
        </div>
      ),
    },
    {
      title: "Opiniones estudiantiles. 3 meses de curso",
      content: (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-44">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-black rounded-lg border border-primary relative overflow-hidden bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${testimonial.image})`,
              }}
            >
              <div
                className="absolute inset-0 w-full h-full opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
                style={{
                  backgroundImage: "url(/assets/noise.webp)",
                  backgroundSize: "30%",
                }}
              />
              <div className="absolute inset-0 z-[1] bg-black opacity-70" />
              <CardContent className="p-6 relative z-[2] backdrop-blur-lg h-full">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-10 h-10 ring-2 ring-primary"
                  />
                  <div>
                    <h3 className="font-semibold text-base text-white">
                      {testimonial.name}
                    </h3>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-primary fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white text-sm">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="flex flex-col bg-black">
      <article
        className="min-h-screen flex flex-col relative bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/hero-bg.webp)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative z-10 h-full backdrop-blur-sm grow grid place-content-center">
          <div className="container flex h-full grow flex-col items-center justify-center gap-10 text-center">
            <div className="flex max-w-3xl flex-col">
              <h1 className="text-balance text-4xl md:text-6xl font-bold leading-tight">
                Aprende a hablar japonés de la manera más sencilla y divertida
              </h1>
              <p className="text-pretty text-base sm:text-lg md:text-xl">
                e intégrate en la cultura que tanto te apasiona
              </p>
            </div>
            <Player
              src="/assets/hero-video.mp4"
              poster="https://i.vimeocdn.com/video/1752395669-075e398a02541b1285844240f6037e8deaae9620b5c76fe352650f24898637b8-d?mw=1700&mh=956"
              className="aspect-video w-full max-w-prose overflow-hidden rounded-lg ring-2 ring-primary transition-all hover:ring-4"
              accentColor="#FF0000"
              disableCookies
              disableTracking
            />
            <div className="flex flex-col gap-4">
              <div className="text-center space-y-1.5">
                <LearnNow />
                <p className="text-pretty text-sm">
                  Cursos 100% digitales y acceso inmediato
                </p>
              </div>
              <div className="py-2 flex items-center justify-center gap-3 max-w-80 mx-auto select-none">
                <div className="flex items-center gap-1 text-muted/60">
                  <ShieldCheck className="size-6 min-w-6" />
                  <p className="text-pretty text-xs leading-3">Compra segura</p>
                </div>
                <div className="h-5 w-px min-w-px rounded-full bg-muted/20" />
                <div className="flex items-center gap-1 text-muted/60">
                  <Award className="size-6 min-w-6" />
                  <p className="text-pretty text-xs leading-3">
                    7 días de garantía
                  </p>
                </div>
                <div className="h-5 w-px min-w-px rounded-full bg-muted/20" />
                <div className="flex items-center gap-1 text-muted/60">
                  <MonitorPlay className="size-6 min-w-6" />
                  <p className="text-pretty text-xs leading-3">100% digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="w-full py-1 mb-28 border-y border-primary">
        <VelocityScroll
          text="あきらめないで！あなたの決意が未来への扉を開く鍵だ！ —&#8194;できる！—&#8194;	"
          default_velocity={1}
          className="font-display text-center text-md sm:text-lg font-bold tracking-[-0.02em] drop-shadow-md"
        />
      </article>
      <article className="container">
        <Timeline data={data} />
      </article>
    </section>
  );
}
