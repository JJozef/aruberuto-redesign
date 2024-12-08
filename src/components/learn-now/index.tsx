import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

interface LearnNowProps {
  classBtn?: string;
}

export const LearnNow = ({ classBtn }: LearnNowProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className={cn(
            "hover:bg-primary/60 text-lg flex items-center justify-evenly gap-2 mx-auto",
            classBtn
          )}
        >
          ¡Aprende ahora!
          <Badge
            className="bg-white text-primary pointer-events-none"
            variant="secondary"
          >
            €49/Mes
          </Badge>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black border border-primary/50 !h-auto max-h-[98dvh] min-h-[80dvh] md:max-w-2xl md:py-10 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/60 scrollbar-track-background-primary/80">
        <DialogHeader className="hidden" hidden>
          <DialogTitle>Aprende ahora</DialogTitle>
          <DialogDescription>
            ¡Aprende japonés con Aruberuto Makoto!
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="learn-now" className="w-full">
          <div className="w-full grid place-content-center mb-6">
            <TabsList className="bg-primary/60 [&>button[data-state=inactive]]:text-white">
              <TabsTrigger value="learn-now">Aprende Japonés</TabsTrigger>
              <TabsTrigger value="learn-bonus">Bonus</TabsTrigger>
              <TabsTrigger value="learn-warranty">Garantía</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="learn-now">
            <div className="text-center mb-10">
              <h3 className="text-2xl text-white font-bold">
                Aprende Japonés en Clases Grupales
              </h3>
              <p className="text-center text-muted/80">
                Esto es lo que recibirás:
              </p>
            </div>
            <div className="space-y-6">
              <ul className="text-white text-lg list-none *:mb-3">
                <li>
                  <h4 className="text-md font-bold text-primary/80">
                    Clases Grabadas
                  </h4>
                  <p className="text-sm text-pretty">
                    Acceso a 2 horas semanales de contenido en video. Estas
                    clases grabadas te permiten aprender a tu propio ritmo y
                    repasar los conceptos cuantas veces lo necesites.
                  </p>
                </li>
                <li>
                  <h4 className="text-md font-bold text-primary/80">
                    Sesiones Interactivas en Vivo
                  </h4>
                  <p className="text-sm text-pretty">
                    Además, cada semana tendrás la oportunidad de participar en
                    una videollamada de 1 hora conmigo. Este es el momento ideal
                    para aclarar dudas, preguntar y obtener una explicación
                    detallada de los temas que requieren atención especial.
                  </p>
                </li>
                <li>
                  <h4 className="text-md font-bold text-primary/80">
                    Comunidad de Aprendizaje
                  </h4>
                  <p className="text-sm text-pretty">
                    Al inscribirte, serás parte de nuestra comunidad de
                    aprendizaje en línea, donde podrás intercambiar
                    conocimientos, experiencias y motivación de otros
                    estudiantes.
                  </p>
                </li>
              </ul>

              <div className="text-center">
                <p className="text-muted/80 flex flex-col items-center gap-1">
                  Por tan solo
                  <Badge
                    className="bg-white text-primary pointer-events-none text-xl"
                    variant="secondary"
                  >
                    €49/Mes
                  </Badge>
                  <b className="text-lg">Acceso Inmediato</b>
                </p>
              </div>

              <div className="text-center space-y-2">
                <Button
                  className="bg-primary/60 text-white hover:bg-primary uppercase text-xl md:text-2xl py-6"
                  asChild
                >
                  <Link
                    href="https://pay.hotmart.com/K87532414Y"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Quiero aprender japonés
                  </Link>
                </Button>
                <img
                  className="w-1/2 mx-auto"
                  src="/assets/safecheckout.png"
                  alt="Safe Checkout"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="learn-bonus">
            <h3 className="text-2xl text-white font-bold text-center mb-10">
              Bonus
            </h3>
            <ul className="text-white text-lg list-none *:mb-3">
              <li>
                <h4 className="text-md font-bold text-primary/80">Bonus 1</h4>
                <p className="text-sm text-pretty">
                  Al unirte a nuestra comunidad, tendrás la oportunidad única de
                  chatear o iniciar videollamdas en cualquier momento del día,
                  ¡todos los días de la semana! Imagina una sala de estudio
                  virtual que nunca cierra.
                </p>
              </li>
              <li>
                <h4 className="text-md font-bold text-primary/80">Bonus 2</h4>
                <p className="text-sm text-pretty">
                  Cada lección se acompaña de apuntes correspondientes a la
                  clase impartida, de modo que puedas repasarlos.
                </p>
              </li>
              <li>
                <h4 className="text-md font-bold text-primary/80">Bonus 3</h4>
                <p className="text-sm text-pretty">
                  Después de cada clase, enfrentarás un examen que te ayudará a
                  medir tu progreso y reforzar lo aprendido.
                </p>
              </li>
              <li>
                <h4 className="text-md font-bold text-primary/80">Bonus 4</h4>
                <p className="text-sm text-pretty">
                  Lista de vocabulario dividido por temáticas.
                </p>
              </li>
              <li>
                <h4 className="text-md font-bold text-primary/80">Bonus 5</h4>
                <p className="text-sm text-pretty">
                  Al alcanzar la clase número 18, tu aprendizaje tomará un giro
                  más intenso. En consecuencia, las horas de estudio semanales
                  aumentarán de 2 a 3, además de incluir la videollamada.
                </p>
              </li>
              <li>
                <h4 className="text-md font-bold text-primary/80">Bonus 6</h4>
                <p className="text-sm text-pretty">
                  A partir de la clase 18 también tendrás deberes que serán
                  esenciales para aplicar y practicar lo que has aprendido.
                </p>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="learn-warranty">
            <h3 className="text-2xl text-white font-bold text-center mb-10">
              Garantía de 7 días
            </h3>
            <div className="space-y-3 *:text-md">
              <p>La formación tiene una garantía incondicional de 7 días.</p>
              <p>
                Durante este período, tendrás acceso a las primeras clases y al
                grupo exclusivo de alumnos. Si, por cualquier razón, sientes que
                la formación no cumple con tus expectativas, puedes solicitar el
                reembolso total. Se te devolverá cada céntimo de tu inversión,
                sin complicaciones.
              </p>
              <p>
                Tu satisfacción es mi prioridad, y quiero asegurarme de que no
                pierdas nada al dar este paso hacia tu desarrollo y aprendizaje.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
