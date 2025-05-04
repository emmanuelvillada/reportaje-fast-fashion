"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Comentarios } from "@/components/comentarios"

interface Pregunta {
  id: number
  texto: string
  opciones: {
    texto: string
    resultado: string
    puntos: number
  }[]
}

const preguntas: Pregunta[] = [
  {
    id: 1,
    texto: "¿Con qué frecuencia compras ropa nueva?",
    opciones: [
      { texto: "Cada semana", resultado: "Consumo muy alto", puntos: 3 },
      { texto: "Cada mes", resultado: "Consumo moderado", puntos: 2 },
      { texto: "Cada temporada", resultado: "Consumo bajo", puntos: 1 },
      { texto: "Solo cuando lo necesito", resultado: "Consumo consciente", puntos: 0 },
    ],
  },
  {
    id: 2,
    texto: "¿Qué haces con la ropa que ya no usas?",
    opciones: [
      { texto: "La tiro a la basura", resultado: "Impacto alto", puntos: 3 },
      { texto: "La guardo indefinidamente", resultado: "Impacto moderado", puntos: 2 },
      { texto: "La dono", resultado: "Impacto bajo", puntos: 1 },
      { texto: "La vendo o intercambio", resultado: "Impacto mínimo", puntos: 0 },
    ],
  },
  {
    id: 3,
    texto: "¿Qué factores influyen más en tu decisión de compra?",
    opciones: [
      { texto: "Precio bajo y tendencias", resultado: "Consumidor fast fashion", puntos: 3 },
      { texto: "Calidad y durabilidad", resultado: "Consumidor consciente", puntos: 1 },
      { texto: "Marca y exclusividad", resultado: "Consumidor de lujo", puntos: 2 },
      { texto: "Impacto ambiental y ético", resultado: "Consumidor sostenible", puntos: 0 },
    ],
  },
  {
    id: 4,
    texto: "¿Cuántas prendas compras que usas menos de 5 veces?",
    opciones: [
      { texto: "Muchas (más del 50%)", resultado: "Consumo impulsivo alto", puntos: 3 },
      { texto: "Algunas (25-50%)", resultado: "Consumo impulsivo moderado", puntos: 2 },
      { texto: "Pocas (menos del 25%)", resultado: "Consumo planificado", puntos: 1 },
      { texto: "Ninguna, uso todo lo que compro", resultado: "Consumo consciente", puntos: 0 },
    ],
  },
]

export default function InteractivoPage() {
  const [preguntaActual, setPreguntaActual] = useState(0)
  const [respuestas, setRespuestas] = useState<number[]>([])
  const [mostrarResultado, setMostrarResultado] = useState(false)

  const handleRespuesta = (puntos: number) => {
    const nuevasRespuestas = [...respuestas, puntos]
    setRespuestas(nuevasRespuestas)

    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1)
    } else {
      setMostrarResultado(true)
    }
  }

  const reiniciarTest = () => {
    setPreguntaActual(0)
    setRespuestas([])
    setMostrarResultado(false)
  }

  const calcularPuntuacion = () => {
    return respuestas.reduce((total, puntos) => total + puntos, 0)
  }

  const obtenerResultado = () => {
    const puntuacion = calcularPuntuacion()

    if (puntuacion <= 3) {
      return {
        titulo: "Consumidor Consciente",
        descripcion:
          "¡Felicidades! Tus hábitos de consumo son sostenibles y responsables. Sigues prácticas que minimizan el impacto ambiental y social de la moda.",
        imagen: "/placeholder.svg?height=300&width=300",
      }
    } else if (puntuacion <= 7) {
      return {
        titulo: "Consumidor en Transición",
        descripcion:
          "Estás en el camino correcto. Tienes algunos hábitos sostenibles, pero aún hay áreas donde puedes mejorar tu relación con la moda.",
        imagen: "/placeholder.svg?height=300&width=300",
      }
    } else {
      return {
        titulo: "Consumidor Fast Fashion",
        descripcion:
          "Tus hábitos de consumo tienen un alto impacto ambiental. Considera adoptar prácticas más sostenibles para reducir tu huella ecológica.",
        imagen: "/placeholder.svg?height=300&width=300",
      }
    }
  }

  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al reportaje</span>
          </Link>
        </div>
      </header>

      <main className="container py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Test Interactivo: ¿Cuál es tu relación con la moda?
            </h1>
            <p className="text-muted-foreground">
              Descubre qué tipo de consumidor eres y cómo tus hábitos impactan en el medio ambiente.
            </p>
          </div>

          {!mostrarResultado ? (
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>
                      Pregunta {preguntaActual + 1} de {preguntas.length}
                    </span>
                    <span>{Math.round(((preguntaActual + 1) / preguntas.length) * 100)}%</span>
                  </div>
                  <Progress value={((preguntaActual + 1) / preguntas.length) * 100} className="h-2" />
                </div>

                <h2 className="text-xl font-bold mb-6">{preguntas[preguntaActual].texto}</h2>

                <div className="space-y-3">
                  {preguntas[preguntaActual].opciones.map((opcion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-between text-left h-auto py-3 px-4"
                      onClick={() => handleRespuesta(opcion.puntos)}
                    >
                      <span>{opcion.texto}</span>
                      <ChevronRight className="h-4 w-4 ml-2 opacity-50" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="mx-auto rounded-full overflow-hidden w-32 h-32 mb-4">
                      <Image
                        src={obtenerResultado().imagen || "/placeholder.svg"}
                        width={128}
                        height={128}
                        alt="Resultado"
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-2xl font-bold">{obtenerResultado().titulo}</h2>
                    <p className="text-muted-foreground">{obtenerResultado().descripcion}</p>

                    <div className="pt-6">
                      <Button onClick={reiniciarTest} variant="outline" className="mr-2">
                        Reiniciar test
                      </Button>
                      <Button asChild>
                        <Link href="/#consumidores">Ver más testimonios</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h3 className="text-xl font-bold">Recomendaciones personalizadas</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-2">Marcas sostenibles en Medellín</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Descubre alternativas locales al fast fashion que respetan el medio ambiente y los derechos
                        laborales.
                      </p>
                      <Button variant="link" className="p-0 h-auto">
                        Ver marcas
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-2">Guía de consumo consciente</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Aprende a crear un armario cápsula y a tomar decisiones más sostenibles en tus compras.
                      </p>
                      <Button variant="link" className="p-0 h-auto">
                        Leer guía
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Comentarios />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
