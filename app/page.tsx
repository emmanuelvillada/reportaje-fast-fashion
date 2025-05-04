import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, MessageCircle, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageCompare from "@/components/image-compare"
import Historieta from "@/components/historieta"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Moda</span>Rápida
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#ambiental" className="text-sm font-medium hover:underline underline-offset-4">
              Ambiental
            </Link>
            <Link href="#empresarial" className="text-sm font-medium hover:underline underline-offset-4">
              Empresarial
            </Link>
            <Link href="#marketing" className="text-sm font-medium hover:underline underline-offset-4">
              Marketing
            </Link>
            <Link href="#psicologico" className="text-sm font-medium hover:underline underline-offset-4">
              Psicológico
            </Link>
            <Link href="#consumidores" className="text-sm font-medium hover:underline underline-offset-4">
              Consumidores
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              poster="/placeholder.svg?height=720&width=1280"
            >
              <source src="/placeholder.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10 text-white">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 max-w-[800px]">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  El verdadero costo del Fast Fashion en Medellín
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Un reportaje multimedia sobre el impacto de la moda rápida en nuestra ciudad: desde el daño ambiental
                  hasta la psicología del consumo.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground">
                  Comenzar a leer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-transparent px-8 text-sm font-medium text-white hover:bg-white/10"
                >
                  Ver video introductorio
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Publicado: Mayo 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>32 comentarios</span>
                </div>
                <div className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  <span>Compartir</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="ambiental">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 mx-auto max-w-3xl">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Impacto Ambiental</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  El fast fashion es la segunda industria más contaminante del mundo después del petróleo.
                </p>
              </div>
              <div className="grid gap-6">
                <p>
                  En Medellín, la industria textil ha sido históricamente uno de los pilares económicos. Sin embargo, el
                  auge del fast fashion ha transformado radicalmente el panorama, generando consecuencias ambientales
                  que pocas veces se visibilizan.
                </p>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    width={1280}
                    height={720}
                    alt="Contaminación textil en ríos de Medellín"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white text-sm">
                    Residuos textiles en el río Medellín, 2023
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Datos alarmantes</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>85% de los textiles terminan en vertederos</li>
                      <li>2,700 litros de agua para fabricar una camiseta</li>
                      <li>Microplásticos liberados en cada lavado</li>
                      <li>Químicos tóxicos en procesos de teñido</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Iniciativas locales</h3>
                    <p>
                      Conoce las empresas de Medellín que están apostando por la moda sostenible y cómo están
                      transformando la industria local.
                    </p>
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Leer más sobre iniciativas sostenibles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 mx-auto max-w-3xl">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Antes vs Después</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Desliza para ver el impacto del fast fashion en nuestro medio ambiente.
                </p>
              </div>
              <div className="grid gap-6">
                <ImageCompare />
                <p className="text-sm text-gray-500 text-center">
                  Desliza la barra para comparar un ecosistema saludable con uno afectado por los residuos textiles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="empresarial">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 mx-auto max-w-3xl">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Perspectiva Empresarial</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  El dilema entre rentabilidad y sostenibilidad en la industria textil de Medellín.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    width={1280}
                    height={720}
                    alt="Centro textil en Medellín"
                    className="object-cover"
                  />
                </div>
                <div className="grid gap-6">
                  <p>
                    Medellín ha sido conocida como la "capital textil de Colombia", pero la llegada de marcas
                    internacionales de fast fashion ha puesto en jaque a muchas empresas locales. ¿Cómo están
                    respondiendo los empresarios paisas ante este fenómeno?
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "Competir con el fast fashion internacional es casi imposible en términos de precio, pero estamos
                    apostando por la calidad y la sostenibilidad como valores diferenciales."
                    <footer className="text-sm mt-2">— Carlos Restrepo, empresario textil</footer>
                  </blockquote>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Entrevistas exclusivas</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            width={48}
                            height={48}
                            alt="Foto de perfil"
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <p className="font-medium">María Londoño</p>
                          <p className="text-sm text-gray-500">CEO, Textiles Antioquia</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            width={48}
                            height={48}
                            alt="Foto de perfil"
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Juan Gómez</p>
                          <p className="text-sm text-gray-500">Fundador, EcoModa</p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Ver todas las entrevistas</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="marketing">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 mx-auto max-w-3xl">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Estrategias de Marketing
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cómo las marcas de fast fashion conquistan al consumidor medellinense.
                </p>
              </div>
              <div className="grid gap-6">
                <p>
                  Las estrategias de marketing del fast fashion son sofisticadas y efectivas. Desde la ubicación
                  estratégica en centros comerciales hasta las campañas en redes sociales, analizamos cómo estas marcas
                  han logrado cambiar los hábitos de consumo en Medellín.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">12-15</div>
                    <p className="text-sm">Colecciones por año en tiendas fast fashion</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">+200%</div>
                    <p className="text-sm">Aumento en publicidad digital desde 2020</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3 días</div>
                    <p className="text-sm">Tiempo promedio para agotar nuevas colecciones</p>
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    width={1280}
                    height={720}
                    alt="Publicidad de fast fashion en Medellín"
                    className="object-cover"
                  />
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Análisis de campañas</h3>
                  <p>
                    Hemos analizado las últimas campañas publicitarias de las principales marcas de fast fashion en
                    Medellín para entender sus estrategias y tácticas.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Ver análisis completo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 mx-auto max-w-4xl">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  La Historia de una Prenda
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Un recorrido ilustrado por el ciclo de vida de una prenda fast fashion.
                </p>
              </div>
              <div className="grid gap-8">
                <Historieta />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="psicologico">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 mx-auto max-w-3xl">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Impacto Psicológico</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  La psicología detrás del consumo compulsivo de moda.
                </p>
              </div>
              <div className="grid gap-6">
                <p>
                  El fast fashion no solo afecta nuestro bolsillo y el medio ambiente, sino también nuestra salud
                  mental. La constante presión por estar a la moda y renovar el guardarropa genera ansiedad y
                  comportamientos compulsivos en muchos consumidores.
                </p>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    width={1280}
                    height={720}
                    alt="Consumo compulsivo de moda"
                    className="object-cover"
                  />
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "El dopamine dressing o vestirse para sentirse bien es un fenómeno real, pero el fast fashion ha
                  convertido esta búsqueda de bienestar en un ciclo adictivo de compra-descarte-compra."
                  <footer className="text-sm mt-2">— Dra. Patricia Álvarez, psicóloga especialista en consumo</footer>
                </blockquote>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Test: ¿Eres adicto a la moda?</h3>
                  <p className="mb-4">
                    Responde este breve cuestionario para descubrir si tienes una relación saludable con la moda o si
                    has caído en patrones de consumo compulsivo.
                  </p>
                  <Button>Realizar test</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="consumidores">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 mx-auto max-w-3xl">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Voces de los Consumidores
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Testimonios reales de habitantes de Medellín sobre su relación con el fast fashion.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-muted p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          width={48}
                          height={48}
                          alt="Foto de perfil"
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Camila, 24 años</p>
                        <p className="text-sm text-gray-500">Estudiante universitaria</p>
                      </div>
                    </div>
                    <p className="italic">
                      "Compro en tiendas de fast fashion porque es lo que puedo pagar como estudiante. Me gustaría
                      apoyar marcas sostenibles, pero son mucho más caras."
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          width={48}
                          height={48}
                          alt="Foto de perfil"
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Andrés, 35 años</p>
                        <p className="text-sm text-gray-500">Profesional en marketing</p>
                      </div>
                    </div>
                    <p className="italic">
                      "Hace dos años decidí comprar menos pero mejor. Ahora invierto en piezas de mejor calidad que me
                      duran mucho más tiempo."
                    </p>
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    width={1280}
                    height={720}
                    alt="Consumidores en centro comercial de Medellín"
                    className="object-cover"
                  />
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Comparte tu experiencia</h3>
                  <p className="mb-4">
                    ¿Cómo ha impactado el fast fashion en tu vida? Comparte tu testimonio y forma parte de este
                    reportaje interactivo.
                  </p>
                  <Button>Enviar mi historia</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 mx-auto max-w-3xl">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Y ahora qué?</h2>
                <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Alternativas y soluciones para un consumo más consciente.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Moda sostenible</h3>
                    <p className="text-gray-300 mb-4">
                      Descubre marcas locales que apuestan por la sostenibilidad y el comercio justo.
                    </p>
                    <Button variant="outline" className="w-full">
                      Explorar
                    </Button>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Segunda mano</h3>
                    <p className="text-gray-300 mb-4">
                      Tiendas y plataformas para comprar y vender ropa de segunda mano en Medellín.
                    </p>
                    <Button variant="outline" className="w-full">
                      Explorar
                    </Button>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Consumo consciente</h3>
                    <p className="text-gray-300 mb-4">
                      Guía práctica para reducir tu consumo de moda y crear un armario más sostenible.
                    </p>
                    <Button variant="outline" className="w-full">
                      Explorar
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-4">Suscríbete a nuestro newsletter</h3>
                  <p className="text-gray-300 mb-4">
                    Recibe actualizaciones sobre este reportaje y más contenido sobre consumo consciente.
                  </p>
                  <div className="flex gap-2 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Tu correo electrónico"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button>Suscribirse</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Reportaje Fast Fashion Medellín. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Twitter" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Instagram" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Facebook" />
              <span className="sr-only">Facebook</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
